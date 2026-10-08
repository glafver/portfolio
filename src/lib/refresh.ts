export const CONTENT_CHANGED_EVENT = 'portfolio:content-changed';

export function notifyContentChanged(): void {
    window.dispatchEvent(new Event(CONTENT_CHANGED_EVENT));
}
