-- ============================================================
-- Portfolio admin: database schema
-- Run this file in the Supabase SQL Editor.
-- ============================================================

-- Projects -----------------------------------------------------------------
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  tech text[] not null default '{}',
  images text[] not null default '{}',
  link text not null default '',
  important text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- Site content (editable texts) --------------------------------------------
create table if not exists public.site_content (
  key text primary key,
  value text not null default '',
  updated_at timestamptz not null default now()
);

-- Row Level Security -------------------------------------------------------
alter table public.projects enable row level security;
alter table public.site_content enable row level security;

-- Public can read everything.
create policy "public read projects"
  on public.projects for select using (true);

create policy "public read site_content"
  on public.site_content for select using (true);

-- Only authenticated (the single admin) can write.
create policy "admin insert projects"
  on public.projects for insert with check (auth.role() = 'authenticated');
create policy "admin update projects"
  on public.projects for update using (auth.role() = 'authenticated');
create policy "admin delete projects"
  on public.projects for delete using (auth.role() = 'authenticated');

create policy "admin insert site_content"
  on public.site_content for insert with check (auth.role() = 'authenticated');
create policy "admin update site_content"
  on public.site_content for update using (auth.role() = 'authenticated');
create policy "admin delete site_content"
  on public.site_content for delete using (auth.role() = 'authenticated');

-- Storage: public bucket for project images --------------------------------
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

create policy "public read project images"
  on storage.objects for select using (bucket_id = 'project-images');

create policy "admin upload project images"
  on storage.objects for insert
  with check (bucket_id = 'project-images' and auth.role() = 'authenticated');

create policy "admin update project images"
  on storage.objects for update
  using (bucket_id = 'project-images' and auth.role() = 'authenticated');

create policy "admin delete project images"
  on storage.objects for delete
  using (bucket_id = 'project-images' and auth.role() = 'authenticated');
