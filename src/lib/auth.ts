import { supabase } from './supabase';
import type { Session } from '@supabase/supabase-js';

export async function signInAdmin(email: string, password: string): Promise<void> {
    if (!supabase) throw new Error('Supabase is not configured');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
}

export async function signOutAdmin(): Promise<void> {
    if (!supabase) return;
    await supabase.auth.signOut();
}

export async function getSession(): Promise<Session | null> {
    if (!supabase) return null;
    const { data } = await supabase.auth.getSession();
    return data.session;
}

export function subscribeToAuth(callback: (session: Session | null) => void): () => void {
    if (!supabase) {
        return () => {};
    }
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        callback(session);
    });
    return () => data.subscription.unsubscribe();
}
