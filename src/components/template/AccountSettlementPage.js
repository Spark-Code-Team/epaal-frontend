"use client"

import ContineuButton from "../elements/ContineuButton";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import ShopCalander from "../module/adminShop/ShopCalander";


export default function AccountSettlementPage() {


    return (
        <div
            className="
                h-full
                flex
                flex-col
                justify-between
            "
        >
            <div>
                <AddProductTitle
                    levelState={5}
                    titleKey="addShop"
                />
                <ShopCalander />
            </div>

            <ContineuButton 
                href="/"
                canReturn={true}
                backHref="/"
            />
        </div>
    )
}