import BottomNavbar from '@/components/module/layoutModule/BottomNavbar';
import ShopNavbar from '@/components/module/layoutModule/ShopNavbar';

export default function ShopLayout({ children }) {
  return (
    <>
      <div className='mx-auto min-h-[1200px] w-full'>
        <ShopNavbar />
        {children}
        <BottomNavbar />
      </div>
    </>
  );
}
