import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ujangdoubleday.id'),
  alternates: {
    canonical: '/',
  },
  title: 'Ilham Alfath | Full Stack Developer & AI Engineer',
  description:
    'Portfolio of Ilham Alfath — Full Stack Developer and AI Engineer passionate about crafting modern digital experiences and intelligent, data-driven solutions.',
  authors: [{ name: 'Ilham Alfath', url: 'https://www.ujangdoubleday.id' }],
  keywords: [
    'Ilham Alfath',
    'full-stack developer',
    'AI engineer',
    'artificial intelligence',
    'machine learning',
    'portfolio',
    'Next.js',
    'React',
  ],
  openGraph: {
    title: 'Ilham Alfath | Full Stack Developer & AI Engineer',
    description:
      'Portfolio of Ilham Alfath — Full Stack Developer and AI Engineer passionate about crafting modern digital experiences and intelligent, data-driven solutions.',
    url: 'https://www.ujangdoubleday.id',
    siteName: 'Ilham Alfath Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ilham Alfath | Full Stack Developer & AI Engineer',
    description:
      'Portfolio of Ilham Alfath — Full Stack Developer and AI Engineer passionate about crafting modern digital experiences and intelligent, data-driven solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preload" href="/images/Windows_98.png" as="image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
