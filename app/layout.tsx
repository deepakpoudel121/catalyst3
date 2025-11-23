import './globals.css';
import type { Metadata } from 'next';
import { Poppins} from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Catalyst Agency - #1 Growth Engine for Elite Brands & Creators',
  description: 'From strategy to editing to distribution, we make your content work harder, grow faster, and never stop performing.',
  icons: {
    icon: '/favicon.png',
    // Or use PNG/SVG
    // icon: '/icon.png',
    // apple: '/apple-icon.png',
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
