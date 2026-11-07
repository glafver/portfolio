// Thin REST client for the Neon Function backend.
const API_URL = import.meta.env.VITE_API_URL as string | undefined;

export const isApiConfigured = Boolean(API_URL);

export const AUTH_CHANGED_EVENT = 'portfolio:auth-changed';

const ADMIN_TOKEN_KEY = 'portfolio_admin_token';

export function getAdminToken(): string | null {
    return localStorage.getItem(ADMIN_TOKEN_KEY);
}

export function setAdminToken(token: string | null): void {
    if (token) {
        localStorage.setItem(ADMIN_TOKEN_KEY, token);
    } else {
        localStorage.removeItem(ADMIN_TOKEN_KEY);
    }
}

interface RequestOptions {
    method?: string;
    body?: unknown;
    auth?: boolean;
}

export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    if (!API_URL) throw new Error('API is not configured');

    const token = getAdminToken();
    const headers: Record<string, string> = {};
    // Only set Content-Type when there is a body, so simple GETs avoid a CORS preflight.
    if (options.body !== undefined) headers['Content-Type'] = 'application/json';
    if (options.auth && token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}${path}`, {
        method: options.method ?? 'GET',
        headers,
        body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error((data as { error?: string } | null)?.error ?? `HTTP ${response.status}`);
    }

    return response.json() as Promise<T>;
}
