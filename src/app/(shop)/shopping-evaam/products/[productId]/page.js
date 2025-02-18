import ProductPage from "@/components/template/ProductPage";
import { StaticData } from "../../../../../../public/staticData/StaticData";



export default async function Product({ params }) {

    const {productId} = await params

    const target = StaticData.filter(item => item.id == productId)
    
    return (
        <ProductPage target={target}/>
    )
}