// components
import Footer from "./Footeter";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div
        className="
          w-[390px]
          mx-auto
          min-h-16
        "
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
