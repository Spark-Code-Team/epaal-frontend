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
<<<<<<< HEAD
                
                
=======
>>>>>>> b31feb3f67f5819114602d8c0f78c09f030fb0bf
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
                        bg-white
                    "
                >
                    { children }
                </div>
            </div>
        </div>
    )
}