// font
import localFont from "next/font/local";
// css
import "./globals.css";
import Layout from "@/components/layout/Layout";
export const metadata = {
  title: "EPAAL",
  description: "Epaal",
};

const danaFont = localFont({
  src: [
    { path: "../../public/fonts/dana.ttf" },
    { path: "../../public/fonts/dana.woff" },
    { path: "../../public/fonts/dana.woff2" },
  ],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${danaFont.className} bg-slate-100`}>
        {/* <Layout> */}
        {children}
        {/* </Layout> */}
      </body>
    </html>
  );
}
