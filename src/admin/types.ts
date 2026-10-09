import type { Project } from '../types';
import type { ContentSectionKey } from './contentFields';

export type EditorTarget =
    | { kind: 'project'; project: Project | null }
    | { kind: 'content'; section: ContentSectionKey }
    | { kind: 'experience' };
