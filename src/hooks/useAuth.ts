import { useEffect, useState } from 'react';
import { getSession, subscribeToAuth } from '../lib/auth';
import type { Session } from '../lib/auth';

export function useAuth() {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;

        setSession(getSession());
        setLoading(false);

        const unsubscribe = subscribeToAuth((s) => {
            if (active) setSession(s);
        });

        return () => {
            active = false;
            unsubscribe();
        };
    }, []);

    return { session, loading };
}
