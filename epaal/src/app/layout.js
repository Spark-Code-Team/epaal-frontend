// css
import './globals.css';
import { danaFont } from '@/utils/fonts';

// fonts

export const metadata = {
  title: 'EPAAL',
  description: 'Epaal',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={`${danaFont.className} mx-auto max-w-7xl bg-slate-100`}>
        {children}
      </body>
    </html>
  );
}
