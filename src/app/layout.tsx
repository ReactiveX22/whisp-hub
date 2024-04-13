import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Whisp Hub',
  description: 'A Reddit clone.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        'light bg-white text-slate-900 antialiased',
        inter.className
      )}
    >
      <Providers>
        <body>
          {/* Navbar */}
          <Navbar />

          {/* pages */}
          <div className='container max-w-7xl pt-12'>{children}</div>

          {/* toast notification */}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
