

// nextjs
import Link from "next/link";



export default function NavElements() {


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
            <div
                className="
                    flex
                    items-center
                    flex-col
                    text-black
                    group
                    cursor-pointer
                    relative
                "
            >
                <Link href="/shopping-evaam" className="group-hover:text-blue-900 transition-all duration-300">فروشگاه ایوام</Link>
                <div
                    className="
                        bg-blue-900
                        w-0
                        group-hover:w-full
                        text-blue-900
                        transition-all
                        duration-300
                        absolute
                        h-[2px]
                        bottom-[-10px]
                    "
                >
                    
                </div>
            </div>
            <div
                className="
                    flex
                    items-center
                    flex-col
                    text-black
                    group
                    cursor-pointer
                    relative
                "
            >
                <Link href="#" className="group-hover:text-blue-900 transition-all duration-300">راهنمای دریافت وام</Link>
                <div
                    className="
                        bg-blue-900
                        w-0
                        group-hover:w-full
                        text-blue-900
                        transition-all
                        duration-300
                        absolute
                        h-[2px]
                        bottom-[-10px]
                    "
                >
                    
                </div>
            </div>
            <div
                className="
                    flex
                    items-center
                    flex-col
                    text-black
                    group
                    cursor-pointer
                    relative
                "
            >
                <Link href="#" className="group-hover:text-blue-900 transition-all duration-300">بلاگ</Link>
                <div
                    className="
                        bg-blue-900
                        w-0
                        group-hover:w-full
                        text-blue-900
                        transition-all
                        duration-300
                        absolute
                        h-[2px]
                        bottom-[-10px]
                    "
                >
                    
                </div>
            </div>
            <div
                className="
                    flex
                    items-center
                    flex-col
                    text-black
                    group
                    cursor-pointer
                    relative
                "
            >
                <Link href="#" className="group-hover:text-blue-900 transition-all duration-300">سوالات متداول</Link>
                <div
                    className="
                        bg-blue-900
                        w-0
                        group-hover:w-full
                        text-blue-900
                        transition-all
                        duration-300
                        absolute
                        h-[2px]
                        bottom-[-10px]
                    "
                >
                    
                </div>
            </div>
        </div>
    )
}