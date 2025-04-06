import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";



export default function LayoutAdmin({ children }) {

    return (
        <div
            className="
                flex
                max-h-full
            "
        >
            <div
                className="
                    w-[288px]
                    min-h-[100vh]
                "
            >
                <SidebarAdmin />
            </div>

            <div
                className="
                    flex
                    flex-col
                    w-[80%]
                    h-screen
                "
            >
                <div
                    className="
                        w-full
                        bg-white
                        min-h-[20%]
                    "
                >
                    <HeaderAdmin />
                    
                </div>
                <div
                    className="
                        w-full
                        bg-white
                        min-h-[80%]
                        pb-2
                    "
                >
                    { children }
                </div>
            </div>
        </div>
    )
}