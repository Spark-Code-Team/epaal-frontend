// components
import BottomNavbar from "../module/layoutModule/BottomNavbar";
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
            min-h-[1200px]
          "
        >
          {children}
        </div>
      <Footer />
    </>
  );
}
