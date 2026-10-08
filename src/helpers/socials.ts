import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useSiteContent } from '../hooks/useSiteContent';

export interface SocialLinkField {
    key: string;
    name: string;
    icon: IconType;
}

export const SOCIAL_LINK_FIELDS: SocialLinkField[] = [
    { key: 'social.linkedin', name: 'LinkedIn', icon: FaLinkedin },
    { key: 'social.facebook', name: 'Facebook', icon: FaFacebook },
    { key: 'social.github', name: 'GitHub', icon: FaGithub },
    { key: 'social.instagram', name: 'Instagram', icon: FaInstagram },
];

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export function useSocialLinks(): SocialLink[] {
    const content = useSiteContent();
    return SOCIAL_LINK_FIELDS.map((field) => ({
        name: field.name,
        url: content[field.key] ?? '',
        icon: field.icon,
    })).filter((link) => link.url);
}
