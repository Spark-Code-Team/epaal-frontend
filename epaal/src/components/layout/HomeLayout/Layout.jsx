// components
import BottomNavbar from "../../module/layoutModule/BottomNavbar";
import Footer from "./Footeter";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <div
          className="
            w-full
            mx-auto
          "
        >
          {children}
        </div>
      <Footer />
    </>
  );
}
