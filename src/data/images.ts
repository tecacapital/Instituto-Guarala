import logo from '../../asset/logo.png';
import whatsapp1 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.33 (1).jpeg';
import whatsapp2 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.33 (2).jpeg';
import whatsapp3 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.33 (3).jpeg';
import whatsapp4 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.33.jpeg';
import whatsapp5 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.34 (1).jpeg';
import whatsapp6 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.34.jpeg';
import whatsapp7 from '../../asset/WhatsApp Image 2026-11-09 at 19.39.35.jpeg';

export const images = {
  logo,
  whatsapp1,
  whatsapp2,
  whatsapp3,
  whatsapp4,
  whatsapp5,
  whatsapp6,
  whatsapp7,
} as const;

export type ImageKey = keyof typeof images;