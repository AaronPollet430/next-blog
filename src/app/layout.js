import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Blog App',
  description: 'Next.js Blog App',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container'>
          <div className='wrapper'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
