import Footer from "../HomeLayout/Footeter";
import ShopHeader from "./ShopHeader";



export default function LayoutShop({ children }) {

    return (
        <>
            <ShopHeader />
                { children }
            <Footer />
        </>
    )
}