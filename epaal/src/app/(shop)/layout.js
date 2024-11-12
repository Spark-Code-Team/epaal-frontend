import Layout from "@/components/layout/Layout";
import BottomNavbar from "@/components/module/layoutModule/BottomNavbar";

export default function ShopLayout({ children }) {
  return (
    <>
      <Layout>
        {children}
        <BottomNavbar/>
        </Layout>

    </>
  );
}
