import LayoutShop from "@/components/layout/ShopLayout/LayoutShop";
import BottomNavbar from "@/components/module/layoutModule/BottomNavbar";

export default function ShopLayout({ children }) {
  return (

    <>
      <LayoutShop>

        {children}
        <BottomNavbar/>
      </LayoutShop>
    </>

  );
}
