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

export default function shop() {
  const images = [test1, test2, test3, test4, test5];
  return (
    <>
      <Search />
      <div className="container">
        <Carousel images={images} />
      </div>
      <div className="container grid grid-cols-3 gap-2 p-2 mt-2">
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
    </>
  );
}
