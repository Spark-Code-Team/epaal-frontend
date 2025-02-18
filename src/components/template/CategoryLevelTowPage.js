import CategoryName from "../elements/CategoryName";
import CategoryTitleLevel from "../elements/CategoryTitleLevel";
import PhotoSelect from "../elements/PhotoSelect";
import SelectValed from "../elements/SelectValed";
import TypeProduct from "../module/adminModule/category/TypeProduct";



export default function CategorylevelTowPage({ level }) {

    return (
        <div
            className="
                flex
            "
        >
            <div
                className="
                    w-full
                "
            >
                <CategoryTitleLevel level={level} />
                <CategoryName />
                {
                    level == "سطح دو" ? (
                        <TypeProduct />
                    ) : null
                }
                <PhotoSelect />
                <SelectValed />
            </div>
            <div
                className="
                    w-[425px]
                    relative
                "
            >
                <button
                    className="
                        absolute
                        bottom-2
                        left-4
                        W-[182px]
                        bg-[#054366]
                        text-white
                        p-3
                        rounded-xl
                    "
                >
                    ایجاد دسته
                </button>
            </div>
        </div>
    )
}