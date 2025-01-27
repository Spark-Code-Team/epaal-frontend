
// css
import Providers from "@/redux/Providers";
import "./globals.css";
import { danaFont } from "@/utils/fonts";

// fonts


export const metadata = {
  title: "EVAAM",
  description: "EVAAM",
};



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${danaFont.className} bg-slate-100 max-w-7xl mx-auto`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
