import Carousel from '../elements/carousel';
import Search from '../elements/search';
import test1 from '@/../public/test/test(1).jpg';
import test2 from '@/../public/test/test(2).jpg';
import test3 from '@/../public/test/test(3).jpg';
import test4 from '@/../public/test/test(4).jpg';
import test5 from '@/../public/test/test(5).jpg';
import CategoryCard from '../elements/categoryCard';
import mobilesCategory from '@/../public/image/mobilesCategory.png';
import digitalsCategory from '@/../public/image/digitalsCategory.png';
import homeCategory from '@/../public/image/homeCategory.png';
import ProductCard from '../elements/productCard';
import DropdownMenu from '../module/layoutModule/DropdownMenu';
import Link from 'next/link';

export default function shop() {
  const images = [test1, test2, test3, test4, test5];
  return (
    <>
      <Search />
      <div className='container'>
        <Carousel images={images} />
      </div>
      <div className='no-scrollbar container grid grid-flow-col grid-cols-3 grid-rows-3 items-center justify-items-center gap-y-4 p-2 px-4 pb-8 md:grid-flow-col md:grid-cols-9 md:grid-rows-1 md:gap-32 md:overflow-x-scroll md:px-16'>
        <CategoryCard image={mobilesCategory} title={'موبایل'} />
        <CategoryCard image={digitalsCategory} title={'کالای دیجیتال'} />
        <CategoryCard image={homeCategory} title={'لوازم خانگی'} />
        <CategoryCard image={digitalsCategory} title={'کالای دیجیتال'} />
        <CategoryCard image={homeCategory} title={'لوازم خانگی'} />
        <CategoryCard image={mobilesCategory} title={'موبایل'} />
        <CategoryCard image={homeCategory} title={'لوازم خانگی'} />
        <CategoryCard image={mobilesCategory} title={'موبایل'} />
        <CategoryCard image={digitalsCategory} title={'کالای دیجیتال'} />
      </div>
      <div className='no-scrollbar container my-4 grid grid-flow-col gap-4 overflow-y-scroll'>
        <ProductCard
          className='!bg-gradient-to-tl from-indigo-300 to-indigo-100'
          title={
            <button className='w-3/4 rounded-md border-2 border-solid border-blue-600 py-2 font-bold text-blue-600 sm:w-48'>
              مشاهده همه
            </button>
          }
        />
        <ProductCard variant='new' discount={15} price={69700000} />
        <ProductCard variant='new' discount={15} price={69700000} />
        <ProductCard price={39000000} />
        <ProductCard variant='off' discount={15} price={69700000} />
        <ProductCard variant='off' discount={15} price={19700000} />
        <ProductCard variant='off' discount={15} price={19700000} />
      </div>
      <div className='container bg-white'>
        <DropdownMenu title={'با ایپال'}>
          <Link href={'#'}>درباره ما</Link>
          <Link href={'#'}>تماس با ما</Link>
          <Link href={'#'}>فرصت های شغلی</Link>
          <Link href={'#'}>بلاگ</Link>
          <Link href={'#'}>قوانین</Link>
        </DropdownMenu>
        <DropdownMenu title={'خدمات'}>
          <Link href={'#'}>درباره ما</Link>
          <Link href={'#'}>تماس با ما</Link>
          <Link href={'#'}>فرصت های شغلی</Link>
          <Link href={'#'}>بلاگ</Link>
          <Link href={'#'}>قوانین</Link>
        </DropdownMenu>
        <DropdownMenu title={'راهنما'}>
          <Link href={'#'}>درباره ما</Link>
          <Link href={'#'}>تماس با ما</Link>
          <Link href={'#'}>فرصت های شغلی</Link>
          <Link href={'#'}>بلاگ</Link>
          <Link href={'#'}>قوانین</Link>
        </DropdownMenu>
      </div>
    </>
  );
}
