import ContineuButton from "../elements/ContineuButton";
import InputTitleAdminShop from "../elements/InputTitleAdminShop";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import UploadeImageInput from "../module/adminShop/UploadeImageInput";



export default function UploadImageAdminShopPage() {

    return (
        <div
            className="
                w-full
                h-full
                flex
                flex-col
                justify-between
                mx-3
            "
        >
            <div>
                <AddProductTitle levelState={3} />
                <InputTitleAdminShop 
                    title="انتخاب تصویر"
                />
                <UploadeImageInput />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/upload-image"
                />
            </div>
        </div>
    )
}