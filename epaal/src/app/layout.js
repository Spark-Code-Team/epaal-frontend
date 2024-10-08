
// font
import { Vazirmatn } from "next/font/google"

// css
import "./globals.css";

export const metadata = {
  title: "EPAAL",
  description: "Epaal",
};

const vazirmatn = Vazirmatn({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html 
      lang="fa"
      dir="rtl"
    >
      <body
        className={vazirmatn.className}
      >
        {children}
      </body>
    </html>
  );
}
