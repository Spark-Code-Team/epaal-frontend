import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";



export default function LayoutAdmin({ children }) {

    return (
        <>
        <HeaderAdmin />
        <div
            className="
                flex
            "
        >
            <div
                className="
                    w-[20%]
                    bg-slate-900
                "
            >
                <SidebarAdmin />
                A
            </div>
            <div
                className="
                    w-[80%]
                    bg-emerald-500
                "
            >
                { children }
            </div>
        </div>
        </>
    )
}