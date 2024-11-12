
// css
import "./globals.css";

// fonts
import { danaFont } from "@/utils/fonts";

export const metadata = {
  title: "EPAAL",
  description: "Epaal",
};



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${danaFont.className} bg-slate-100 max-w-7xl mx-auto`}>
        {children}
      </body>
    </html>
  );
}
