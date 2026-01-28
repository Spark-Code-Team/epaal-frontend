// nextjs
import Link from "next/link";

export default function NavElements({ navColor, pathname, options }) {
  return (
    <div className="hidden w-full items-center justify-between pr-7 text-[14px] md:flex">
      {options.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${navColor || pathname != "/evaam-home" ? "text-black" : "text-white"} group relative cursor-pointer`}
        >
          <Link
            href={item.href}
            className={` ${navColor || pathname != "/evaam-home" ? "group-hover:text-black" : "group-hover:text-white"} transition-all duration-300`}
          >
            {item.title}
          </Link>
          <div
            className={` ${navColor || pathname != "/evaam-home" ? "bg-black" : "bg-white"} w-0 group-hover:w-full ${navColor || pathname != "/evaam-home" ? "bg-black" : "text-white"} absolute bottom-[-10px] h-[2px] transition-all duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
}
