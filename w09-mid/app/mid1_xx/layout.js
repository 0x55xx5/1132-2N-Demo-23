import { Josefin_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import HeaderMid1_xx from '@/components/mid1_xx/HeaderMid1_xx';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const roboto = localFont({
  src: '../Roboto-Regular.ttf',
});

export const metadata = {
  title: 'The Wild Oasis - xx',
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <HeaderMid1_xx />
        <div className='flex-1 px-8 py-8'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
