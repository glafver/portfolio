import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/glafver/', icon: FaLinkedin },
    { name: 'Facebook', url: 'https://www.facebook.com/glafver', icon: FaFacebook },
    { name: 'GitHub', url: 'https://github.com/glafver', icon: FaGithub },
    { name: 'Instagram', url: 'https://www.instagram.com/glafver/', icon: FaInstagram },
];
