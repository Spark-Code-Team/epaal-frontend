import CategoryName from "../elements/CategoryName";
import CategoryTitleLevel from "../elements/CategoryTitleLevel";
import PhotoSelect from "../elements/PhotoSelect";
import SelectValed from "../elements/SelectValed";
import TypeProduct from "../module/adminModule/category/TypeProduct";



export default function CategorylevelTowPage() {

    return (
        <>
            <CategoryTitleLevel level="سطح دو" />
            <CategoryName />
            <TypeProduct />
            <PhotoSelect />
            <SelectValed />
        </>
    )
}