
// css
import Providers from "@/redux/Providers";
import "./globals.css";
import { danaFont } from "@/utils/fonts";
import { Bounce, ToastContainer } from "react-toastify";
import CheckRedux from "@/components/elements/CheckRedux";


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
          <CheckRedux />
        </Providers>
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
