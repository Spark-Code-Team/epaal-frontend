import ShockedAdmin from "../../../public/icons/Admin/AdminShop/ShockedAdmin";



export default function ShockPoints({ title }) {

    return (
        <div
        className="
            flex
            gap-2
            mt-[10px]
            items-center
        "
    >
        <ShockedAdmin />
        <p
            className="
                text-[12px]
                font-normal
                text-[#57585A]
            "
        >
            {
                title
            }
        </p>
    </div>
    )
}