import Image from "next/image";

import Link from "next/link";
function CategoryCard({ image, title, href = "#" }) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center relative h-36 w-full"
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
