import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductImage({ image }) {
  const isArray = Array.isArray(image);

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (isArray && image.length > 0) {
      setMainImage(image[0].product_pic);
    }
  }, [image]);

  if (!isArray) {
    return (
      <div>
        <p>عکسی موجود نیست</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* تصویر اصلی */}
      <div className="flex h-[500px] items-center justify-center">
        <AnimatePresence mode="popLayout">
          {mainImage && (
            <motion.div
              key={mainImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-[300px] w-[300px] md:h-[350px] md:w-[350px]"
            >
              <Image
                src={mainImage}
                alt="Main Product Image"
                fill
                className="rounded-lg object-fill shadow-md"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ردیف عکس‌های کوچک با اسکرول افقی */}
      <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex gap-3 overflow-x-auto px-3 py-2">
        {image.map((eachImageObject) => (
          <div
            key={eachImageObject.id}
            onClick={() => setMainImage(eachImageObject.product_pic)}
            className={`relative flex-shrink-0 cursor-pointer ${
              mainImage === eachImageObject.product_pic
                ? "ring-4 ring-evaamGreen"
                : "ring-4 ring-evaamBorderColor hover:ring-evaamCyan"
            } h-24 w-24 rounded-lg transition-all duration-300`}
          >
            <Image
              src={eachImageObject.product_pic}
              alt="Product Thumbnail"
              width={100}
              height={100}
              className="h-full w-full rounded-lg object-fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
