import CheckDefaultCategory from "../../../public/icons/Admin/CheckDefaultCategory";
import CheckTrueCategory from "../../../public/icons/Admin/CheckTrueCategory";
import CategoryAdminShopCard from "../elements/CategoryAdminShopCard";
import ContineuButton from "../elements/ContineuButton";
import AddProductTitle from "../module/adminShop/AddProductTitle";



export default function ProductCategoryAdminPage() {

    const mapArray = Array.from({ length: 10}, (i, v) => i)

    return (
        <div
            className="
                h-full
                flex
                flex-col
                justify-between
            "
        >
            <AddProductTitle
                levelState={4}
                titleKey="addShop"
            />
            <div
                className="
                    w-full
                    flex
                    items-center
                    mr-10
                    mb-[31px]
                "
            >
                <p>
                    نوع دسته را انتخاب کنید: 
                </p>

                <div
                    className="
                        flex
                        items-center
                        justify-around
                        w-1/2
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >
                        <p>
                            کالا
                        </p>
                        <CheckDefaultCategory />
                    </div>
                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >
                        <p>
                            خدمات
                        </p>
                        <CheckTrueCategory />
                    </div>
                </div>
            </div>
            <div
                className="
                    flex
                    flex-wrap
                    gap-[22px]
                    overflow-y-scroll
                    px-10
                "
            >
                {
                    mapArray.map((item, index) => (
                        <CategoryAdminShopCard 
                            key={index}
                        />
                    ))
                }
            </div>
            <ContineuButton 
                href="/admin/sellers/create-seller/account-settlement"
                backHref="/admin/sellers/create-seller/admin-shop-identity"
                canReturn={true}
            />
        </div>
    )
}