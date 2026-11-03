import { Hono } from 'hono';
import { attachDatabasePool } from '@neon/functions';
import { Pool } from 'pg';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
attachDatabasePool(pool);

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT_URL_S3,
    forcePathStyle: true,
});
const S3_BUCKET = 'assets';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? '';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN ?? '';

const app = new Hono();

// CORS (the SPA on Netlify calls this function cross-origin)
app.use('*', async (c, next) => {
    c.header('Access-Control-Allow-Origin', '*');
    c.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (c.req.method === 'OPTIONS') return new Response(null, { status: 204 });
    await next();
});

const isAdmin = (c: any) => ADMIN_TOKEN && c.req.header('Authorization') === `Bearer ${ADMIN_TOKEN}`;
const requireAdmin = (c: any) => {
    if (!isAdmin(c)) return c.json({ error: 'Unauthorized' }, 401);
    return null;
};

// ---- Public reads ----
app.get('/projects', async (c) => {
    const { rows } = await pool.query('SELECT * FROM projects ORDER BY sort_order');
    return c.json(rows);
});
app.get('/content', async (c) => {
    const { rows } = await pool.query('SELECT key, value FROM site_content');
    const map: Record<string, string> = {};
    for (const r of rows) map[r.key] = r.value;
    return c.json(map);
});
app.get('/timeline', async (c) => {
    const { rows } = await pool.query('SELECT * FROM timeline ORDER BY sort_order');
    return c.json(rows);
});
app.get('/certificates', async (c) => {
    const { rows } = await pool.query('SELECT * FROM certificates ORDER BY sort_order');
    return c.json(rows);
});
app.get('/tech-logos', async (c) => {
    const { rows } = await pool.query('SELECT * FROM tech_logos ORDER BY sort_order');
    return c.json(rows);
});

// ---- Auth ----
app.post('/login', async (c) => {
    const { password } = await c.req.json().catch(() => ({ password: '' }));
    if (ADMIN_PASSWORD && password === ADMIN_PASSWORD) {
        return c.json({ token: ADMIN_TOKEN });
    }
    return c.json({ error: 'Invalid password' }, 401);
});

// ---- Upload (admin) -> Object Storage ----
app.post('/upload', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const { name, contentType, data } = await c.req.json().catch(() => ({}));
    if (!name || !data) return c.json({ error: 'Missing name or data' }, 400);
    const ext = (name.split('.').pop() || 'bin').toLowerCase();
    const key = `media/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const buffer = Buffer.from(data, 'base64');
    await s3.send(new PutObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
        Body: buffer,
        ContentType: contentType || 'application/octet-stream',
    }));
    return c.json({ url: `${process.env.AWS_ENDPOINT_URL_S3}/${S3_BUCKET}/${key}` });
});

// ---- Projects (admin) ----
app.post('/projects', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const b = await c.req.json();
    const { rows } = await pool.query(
        `INSERT INTO projects (title, description, tech, images, link, important, github, video, sort_order)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
        [b.title, b.description ?? '', b.tech ?? [], b.images ?? [], b.link ?? '', b.important ?? null, b.github ?? null, b.video ?? null, b.sort_order ?? 0],
    );
    return c.json(rows[0]);
});
app.put('/projects/:id', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const id = c.req.param('id');
    const b = await c.req.json();
    const { rows } = await pool.query(
        `UPDATE projects SET title=$1, description=$2, tech=$3, images=$4, link=$5, important=$6, github=$7, video=$8, sort_order=$9 WHERE id=$10 RETURNING *`,
        [b.title, b.description ?? '', b.tech ?? [], b.images ?? [], b.link ?? '', b.important ?? null, b.github ?? null, b.video ?? null, b.sort_order ?? 0, id],
    );
    return c.json(rows[0]);
});
app.delete('/projects/:id', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const id = c.req.param('id');
    await pool.query('DELETE FROM projects WHERE id=$1', [id]);
    return c.json({ ok: true });
});
app.post('/projects/:id/visible', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const id = c.req.param('id');
    const { visible } = await c.req.json();
    await pool.query('UPDATE projects SET visible=$1 WHERE id=$2', [visible, id]);
    return c.json({ ok: true });
});
app.post('/reorder-projects', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const ordered = await c.req.json();
    for (let i = 0; i < ordered.length; i++) {
        await pool.query('UPDATE projects SET sort_order=$1 WHERE id=$2', [i + 1, ordered[i].id]);
    }
    return c.json({ ok: true });
});

// ---- Site content (admin) ----
app.put('/content', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const entries = await c.req.json();
    for (const [key, value] of Object.entries(entries)) {
        await pool.query(
            'INSERT INTO site_content (key, value) VALUES ($1,$2) ON CONFLICT (key) DO UPDATE SET value=$2',
            [key, value],
        );
    }
    return c.json({ ok: true });
});

// ---- Timeline (admin) ----
app.post('/timeline', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const b = await c.req.json();
    const { rows } = await pool.query(
        `INSERT INTO timeline (type, title, place, link, period, description, sort_order)
         VALUES ($1,$2,$3,$4,$5,$6, COALESCE((SELECT MAX(sort_order)+1 FROM timeline),1)) RETURNING *`,
        [b.type ?? 'work', b.title, b.place ?? '', b.link ?? '', b.period ?? '', b.description ?? ''],
    );
    return c.json(rows[0]);
});
app.put('/timeline/:id', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const id = c.req.param('id');
    const b = await c.req.json();
    await pool.query('UPDATE timeline SET type=$1,title=$2,place=$3,link=$4,period=$5,description=$6 WHERE id=$7',
        [b.type ?? 'work', b.title, b.place ?? '', b.link ?? '', b.period ?? '', b.description ?? '', id]);
    return c.json({ ok: true });
});
app.delete('/timeline/:id', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    await pool.query('DELETE FROM timeline WHERE id=$1', [c.req.param('id')]);
    return c.json({ ok: true });
});
app.post('/reorder-timeline', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const ordered = await c.req.json();
    for (let i = 0; i < ordered.length; i++) {
        await pool.query('UPDATE timeline SET sort_order=$1 WHERE id=$2', [i + 1, ordered[i].id]);
    }
    return c.json({ ok: true });
});

// ---- Certificates (admin) ----
app.post('/certificates', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const b = await c.req.json();
    const { rows } = await pool.query(
        'INSERT INTO certificates (image_url, title, sort_order) VALUES ($1,$2,0) RETURNING *',
        [b.image_url, b.title ?? ''],
    );
    return c.json(rows[0]);
});
app.delete('/certificates/:id', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    await pool.query('DELETE FROM certificates WHERE id=$1', [c.req.param('id')]);
    return c.json({ ok: true });
});

// ---- Tech logos (admin) ----
app.post('/tech-logos', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    const b = await c.req.json();
    const { rows } = await pool.query(
        `INSERT INTO tech_logos (image_url, sort_order)
         VALUES ($1, COALESCE((SELECT MAX(sort_order)+1 FROM tech_logos),1)) RETURNING *`,
        [b.image_url],
    );
    return c.json(rows[0]);
});
app.delete('/tech-logos/:id', async (c) => {
    const denied = requireAdmin(c); if (denied) return denied;
    await pool.query('DELETE FROM tech_logos WHERE id=$1', [c.req.param('id')]);
    return c.json({ ok: true });
});

app.notFound((c) => c.json({ error: 'Not found' }, 404));

export default app;
