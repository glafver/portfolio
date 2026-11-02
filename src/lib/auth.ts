import { request, getAdminToken, setAdminToken, AUTH_CHANGED_EVENT } from './api';

export interface Session {
    token: string;
}

export async function signInAdmin(_email: string, password: string): Promise<void> {
    const { token } = await request<{ token: string }>('/login', {
        method: 'POST',
        body: { password },
    });
    setAdminToken(token);
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

export async function signOutAdmin(): Promise<void> {
    setAdminToken(null);
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

export function getSession(): Session | null {
    const token = getAdminToken();
    return token ? { token } : null;
}

export function subscribeToAuth(callback: (session: Session | null) => void): () => void {
    const handler = () => callback(getSession());
    window.addEventListener(AUTH_CHANGED_EVENT, handler);
    return () => window.removeEventListener(AUTH_CHANGED_EVENT, handler);
}
