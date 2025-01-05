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
                    h-[100vh]
                    bg-blue-600
                "
            >
                <SidebarAdmin />
                A
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
                    A
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