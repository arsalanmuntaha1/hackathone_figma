import { Inter, Great_Vibes } from 'next/font/google';
import localFont from 'next/font/local';

export const helvetica = localFont({
    src: './Helvetica.ttf',
});

export const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

export const inter = Inter({
    subsets: ['latin'], // Latin subset
    weight: ['400', '700'], //specific font weights
});
