import Image from "next/image";

import Link from "next/link";
function CategoryCard({ image, title, href = "#" }) {
  return (
    <div className="container h-36 w-36 relative transition-all duration-300 ease-in-out hover:scale-[1.01] ">
    <Link
      href={href}
      className="w-full h-full"
    >
      <div className="flex flex-col-reverse items-center gap-2 ">
      <Image
        src={image}
        className="object-contain p-2"
        alt={title}
        quality={50}
        fill
      />
      <p className="font-bold text-blue-500 text-sm sm:text-md h-full mt-36">{title}
      </p>
      </div>
    </Link>
    </div>
  );
}

export default CategoryCard;
