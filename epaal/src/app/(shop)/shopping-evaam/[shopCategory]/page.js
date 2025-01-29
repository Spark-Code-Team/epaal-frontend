import ProductCategoryPage from "@/components/template/ProductCategoryPage";
import { StaticData } from "../../../../../public/staticData/StaticData";



export default async function ShopCategory({ params }) {

    const { shopCategory } = await params

    const data = StaticData.filter(item => item.category == shopCategory)
    
    return (
        <ProductCategoryPage data={data} shopCategory={shopCategory}/>
    )
}