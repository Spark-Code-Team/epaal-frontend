

// nextjs
import Link from "next/link";


const options = [
    {
        title: "فروشگاه ایوام",
        href: "#"
    },
    {
        title: "راهنما خرید اقساطی",
        href: "#"
    },
    {
        title: "پذیرندگان",
        href: "#"
    },
    {
        title: "تماس با ما",
        href: "#"
    }
]



export default function NavElements({ navColor }) {


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
                            ${navColor ? "text-black" : "text-white"}
                            group
                            cursor-pointer
                            relative
                        `}
                    >
                        <Link 
                            href={item.href} 
                            className={`
                                ${navColor ? "group-hover:text-black" : "group-hover:text-white"}
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
                                ${navColor ? "bg-black" : "bg-white"}
                                w-0
                                group-hover:w-full
                                ${navColor ? "bg-black" : "text-white"}
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