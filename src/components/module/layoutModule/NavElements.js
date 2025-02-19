

// nextjs
import Link from "next/link";



export default function NavElements({ navColor, pathname, options }) {


    return (
        <div
            className="
                hidden
                w-full
                text-[14px]
                items-center
                justify-between
                pr-7
                md:flex
            "
        >
            {
                options.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            flex
                            items-center
                            flex-col
                            ${(navColor || pathname != "/evaam-home") ? "text-black" : "text-white"}
                            group
                            cursor-pointer
                            relative
                        `}
                    >
                        <Link 
                            href={item.href} 
                            className={`
                                ${(navColor || pathname != "/evaam-home") ? "group-hover:text-black" : "group-hover:text-white"}
                                transition-all
                                duration-300
                            `}
                        >
                            {
                                item.title
                            }
                        </Link>
                        <div
                            className={`
                                ${(navColor || pathname != "/evaam-home") ? "bg-black" : "bg-white"}
                                w-0
                                group-hover:w-full
                                ${(navColor || pathname != "/evaam-home") ? "bg-black" : "text-white"}
                                transition-all
                                duration-300
                                absolute
                                h-[2px]
                                bottom-[-10px]
                            `}
                        >
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}