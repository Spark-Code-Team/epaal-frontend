import Carousel from "../elements/carousel";
import Search from "../elements/search";
import test1 from "@/../public/test/test(1).jpg";
import test2 from "@/../public/test/test(2).jpg";
import test3 from "@/../public/test/test(3).jpg";
import test4 from "@/../public/test/test(4).jpg";
import test5 from "@/../public/test/test(5).jpg";
import CategoryCard from "../elements/categoryCard";
import mobilesCategory from "@/../public/image/mobilesCategory.png";
import digitalsCategory from "@/../public/image/digitalsCategory.png";
import homeCategory from "@/../public/image/homeCategory.png";
import ProductCard from "../elements/productCard";

export default function shop() {
  const images = [test1, test2, test3, test4, test5];
  return (
    <>
      <Search />
      <div className="container">
        <Carousel images={images} />
      </div>
      <div className="container grid grid-cols-3 gap-2 p-2 my-4">
        <CategoryCard image={mobilesCategory} title={"موبایل"} />
        <CategoryCard image={digitalsCategory} title={"کالای دیجیتال"} />
        <CategoryCard image={homeCategory} title={"لوازم خانگی"} />
        <CategoryCard image={digitalsCategory} title={"کالای دیجیتال"} />
        <CategoryCard image={homeCategory} title={"لوازم خانگی"} />
        <CategoryCard image={mobilesCategory} title={"موبایل"} />
        <CategoryCard image={homeCategory} title={"لوازم خانگی"} />
        <CategoryCard image={mobilesCategory} title={"موبایل"} />
        <CategoryCard image={digitalsCategory} title={"کالای دیجیتال"} />
      </div>
      <div className="container grid grid-flow-col gap-4 p-2 overflow-scroll my-4">
        <ProductCard
          className="!bg-gradient-to-tl from-indigo-300 to-indigo-100"
          title={
            <button className="text-blue-600 font-bold border-2 border-solid  border-blue-600 rounded-md w-3/4  sm:w-48 py-2">
              مشاهده همه
            </button>
          }
        />
        <ProductCard variant="new" discount={15} price={69700000} />
        <ProductCard price={39000000} />
        <ProductCard variant="off" discount={15} price={69700000} />
        <ProductCard variant="off" discount={15} price={19700000} />
      </div>
    </>
  );
}
