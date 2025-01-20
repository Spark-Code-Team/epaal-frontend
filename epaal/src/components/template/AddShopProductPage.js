import AddProductTitle from "../module/adminShop/AddProductTitle";
import Hint from "../module/adminShop/Hint";
import SelectCategory from "../module/adminShop/SelectCategory";



export default function AddShopProductPage() {

    return (
        <>
            <AddProductTitle levelState={1} />
            <Hint />
            <SelectCategory />
        </>
    )
}