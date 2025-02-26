import Image from "next/image";

export default function ProductImage({ image }) {
  return (
    <div className="w-full p-5 md:p-0 md:w-1/5">
      <Image
        src={image}
        alt="alt"
        width={250}
        height={250}
        className="w-full rounded-lg md:h-[250px] md:w-[250px]"
      />
    </div>
  );
}
