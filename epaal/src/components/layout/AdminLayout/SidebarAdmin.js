
const sidebar = [
    {
        title: "داشبورد",
        link: "#"
    },
    {
        title: "دسته بندی محصولات",
        link: "#"
    },
    {
        title: "فروشندگان",
        link: "#"
    },
    {
        title: "گزارش ها",
        link: "#"
    },
    {
        title: "نظرات و بازخورد",
        link: "#"
    },
    {
        title: "محتوا",
        link: "#"
    },
    {
        title: "گزارش خطا",
        link: "#"
    },
    {
        title: "خروج از حساب",
        link: "#"
    },
]

export default function SidebarAdmin() {

    return (
        <div
            className="
                max-h-screen
                bg-[#33B1AC]
                overflow-y-scroll
            "
        >

            <div
                className="
                    bg-[#1F6A67]
                    h-[86px]
                "
            >

            </div>

            {
                sidebar.map((item, index) => (
                    <div
                        className="
                            h-[86px]
                            bg-[#33B1AC]
                        "
                        key={index}
                    >

                        <p>
                            {item.title}
                        </p>

                    </div>
                ))
            }

        </div>
    )
}