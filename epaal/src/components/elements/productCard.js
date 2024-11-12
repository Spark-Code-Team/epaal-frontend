import { GiftIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import mobilesCategory from "@/../public/image/samsungZfold.png";
import Link from "next/link";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
function ProductCard({
  title,
  image,
  price,
  discount,
  variant,
  href="#",
  className = "",
}) {

  // configure placeholder data
  price = price > 0 ? digitsEnToFa(addCommas(price)) : null;
  discount = digitsEnToFa(discount || "");
  image = image || mobilesCategory;
  title = title || "گوشی موبایل سامسونگ مدل Galaxy S24 Ultra - دوسیم کارت";

  if (!variant)
    return (
      <div
        className={
          "container flex h-80 w-48 cursor-pointer flex-col gap-2 rounded-xl bg-white p-2 py-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md sm:h-80 sm:w-60 " +
          className
        }
      >
        {/* Image */}
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt="product image"
            fill
            className="object-fill p-4 py-7"
          />
        </div>

        {/* Title */}
        <Link href={"#"} className="mb-4 text-center text-sm">
          {title}
        </Link>

        {/* Price */}
        {price && (
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">شروع قیمت</span>
            <span className="flex items-center font-semibold">
              <span className="text-sm">{price}</span>
              <span className="mr-1">تومان</span>
            </span>
          </div>
        )}

        {/* {discount} */}
        {discount && (
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-gray-500">تخفیف تا</span>
            <div className="flex items-center justify-center rounded-full bg-red-700 px-2 pt-1 text-xs text-white">
              <span className="text-center">{discount}%</span>
            </div>
          </div>
        )}
      </div>
    );

  if (variant === "off")
    return (
      <div
        className={
          "container flex h-80 w-48 cursor-pointer flex-col gap-2 rounded-xl bg-white p-2 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md sm:w-60 " +
          className
        }
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b-2 border-red-700 pb-1 text-red-700">
          <GiftIcon className="h-4 w-4 justify-center" />
          <p className="text-xs">جشنواره</p>
        </div>
        {/* Image */}
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt="product image"
            fill
            className="object-fill p-4"
          />
        </div>

        {/* Title */}
        <Link href={"#"} className="mb-4 text-sm">
          {title}
        </Link>

        {/* Price */}
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">شروع قیمت</span>
          <span className="flex items-center font-semibold">
            <span className="text-sm">{price}</span>
            <span className="mr-1">تومان</span>
          </span>
        </div>

        {/* {discount} */}
        {discount && (
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-gray-500">تخفیف تا</span>
            <div className="flex items-center justify-center rounded-full bg-red-700 px-2 pt-1 text-xs text-white">
              <span className="text-center">{discount}%</span>
            </div>
          </div>
        )}
      </div>
    );
    
  if (variant === "new")
    return (
      <div
        className={
          "container flex h-80 w-48 cursor-pointer flex-col gap-2 rounded-xl bg-white p-2 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md sm:w-60 " +
          className
        }
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b-2 border-teal-800 pb-1 text-teal-800">
          <StarIcon className="h-4 w-4 justify-center" />
          <p className="text-xs">جدید</p>
        </div>
        {/* Image */}
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt="product image"
            fill
            className="object-fill p-4"
            sizes=""
          />
        </div>

        {/* Title */}
        <Link href={"#"} className="mb-4 text-sm">
          {title}
        </Link>

        {/* Price */}
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">شروع قیمت</span>
          <span className="flex items-center font-semibold">
            <span className="text-sm">{price}</span>
            <span className="mr-1">تومان</span>
          </span>
        </div>

        {/* {discount} */}
        {discount && (
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-gray-500">تخفیف تا</span>
            <div className="flex items-center justify-center rounded-full bg-red-700 px-2 pt-1 text-xs text-white">
              <span className="text-center">{discount}%</span>
            </div>
          </div>
        )}
      </div>
    );
}

export default ProductCard;
