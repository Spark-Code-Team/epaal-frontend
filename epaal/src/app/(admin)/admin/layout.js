


export default function AdminLayout({ children }) {


    return (
        <div
            className="
                flex
                justify-between
            "
        >
            <div className="w-[20%] h-[595px] bg-[#00397A]"> </div>
            <div
                className="
                    w-[75%]
                "
            >
                { children }
            </div>
        </div>
    )
}