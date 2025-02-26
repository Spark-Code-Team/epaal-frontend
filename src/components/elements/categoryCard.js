import Image from "next/image";

import Link from "next/link";
function CategoryCard({ category }) {
  return (
    <div>
      <Link
        href="#"
        className="relative flex h-36 w-full flex-col items-center transition-all duration-300 ease-in-out hover:scale-[1.01] gap-3 sm:h-[87px] sm:w-[87px] md:h-[120px] md:w-[120px]"
      >
        <div className="h-[100px] w-[100px] rounded-full p-2 bg-gradient-to-t from-evaamGreen to-evaamBrightGradient md:h-[120px] md:w-[120px]">
          <Image
            src={category.icon}
            width={300}
            height={300}
            className="w-full h-full"
            alt={category.alt}
            quality={50}
          />
        </div>
        <div>
          <p className="sm:text-md text-sm font-bold text-evaamGreen">
            {category.name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
