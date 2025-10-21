import { Inter, Lusitana } from 'next/font/google';
import { Noto_Sans_Devanagari } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] })
export const devanagari = Noto_Sans_Devanagari({
    subsets: ['devanagari'],
    weight: ['400', '700']
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
})