import ContineuButton from "../elements/ContineuButton";
import InputTitleAdminShop from "../elements/InputTitleAdminShop";
import ShockPoints from "../elements/ShockPoints";
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
                <ShockPoints 
                    title="عکس‌ها را از کامپیوتر انتخاب کنید یا آنها را بکشید و اینجا بیندازید. برای تغییر ترتیب نمایش باید عکس‌ها را حرکت داده و جابجا کنید"
                />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/dynamic-field-confirm"
                    canReturn={true}
                    backHref="/admin/admin-shop/constant-field-confirm"
                />
            </div>
        </div>
    )
}