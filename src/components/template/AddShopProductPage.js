import ContineuButton from "../elements/ContineuButton";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import Hint from "../module/adminShop/Hint";
import SelectCategory from "../module/adminShop/SelectCategory";



export default function AddShopProductPage() {

    return (
        <div
            className="
                w-full
                h-full
                flex
                flex-col
                justify-between
            "
        >
            <div>
                <AddProductTitle 
                    levelState={1}
                />
                <Hint />
                <SelectCategory />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/add-field"
                    canReturn={false}
                    backHref="/"
                />
            </div>
        </div>
    )
}