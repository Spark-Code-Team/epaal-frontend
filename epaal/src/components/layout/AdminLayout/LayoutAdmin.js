import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";



export default function LayoutAdmin({ children }) {

    return (
        <div
            className="
                flex
            "
        >
            <div
                className="
                    w-[20%]
                    bg-blue-700
                "
            >
                <SidebarAdmin />
                
                
            </div>

            <div
                className="
                    flex
                    flex-col
                    w-[80%]
                "
            >
                <div
                    className="
                        w-full
                        bg-slate-600
                    "
                >
                    <HeaderAdmin />
                    
                </div>
                <div
                    className="
                        w-full
                        bg-orange-500
                    "
                >
                    { children }
                </div>
            </div>
        </div>
    )
}