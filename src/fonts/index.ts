import { IBM_Plex_Mono, Inter, Montserrat } from 'next/font/google';

export const interFont = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const montFont = Montserrat({
  subsets: ['latin'],
});

export const ibmPlexFont = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});
