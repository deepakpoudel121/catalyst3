import './globals.css';
import type { Metadata } from 'next';
import { Poppins} from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Catalyst Agency - #1 Growth Engine for Elite Brands & Creators',
  description:
    'From strategy to editing to distribution, we make your content work harder, grow faster, and never stop performing.',

  icons: {
    icon: '/thisisfinallogo.png',
  },

  openGraph: {
    title: 'Catalyst Agency - #1 Growth Engine for Elite Brands & Creators',
    description:
      'From strategy to editing to distribution, we make your content work harder, grow faster, and never stop performing.',
    url: 'https://operatecatalyst.com', // <-- update this
    siteName: 'Catalyst Agency',
    images: [
      {
        url: '/3.png', // <-- your custom OG image here
        width: 1200,
        height: 630,
        alt: 'Catalyst Agency Preview',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Catalyst Agency - #1 Growth Engine for Elite Brands & Creators',
    description:
      'From strategy to editing to distribution, we make your content work harder, grow faster, and never stop performing.',
    images: ['/3.png'], // <-- same OG image for Twitter
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}``
