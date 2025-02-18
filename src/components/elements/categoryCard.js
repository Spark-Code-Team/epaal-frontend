import Image from "next/image";

import Link from "next/link";
function CategoryCard({ image, title, href = "#" }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center relative h-36 sm:w-[87px] sm:h-[87px] md:h-[120px] md:w-[120px] w-full transition-all duration-300 ease-in-out hover:scale-[1.01] "
    >
      <Image
        src={image}
        className="object-contain w-full"
        alt={title}
        quality={50}
      />
      <p className="font-bold text-blue-500 text-sm sm:text-md">{title}</p>
    </Link>
  );
}

export default CategoryCard;
