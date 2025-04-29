import CreditConditions from "../elements/CreditConditions";
import InstallmentPurchase from "../elements/InstallmentPurchase";
import LoanApplicationGuide from "../elements/LoanApplicationGuide";
import LoanApplicationProcess from "../elements/LoanApplicationProcess";
import LoanReceiptDocuments from "../elements/LoanReceiptDocuments";
import ProductCategories from "../elements/ProductCategories";
import Banner from "../module/landingModule/Banner";
import SoalatMotadavel from "../elements/SoalatMotadavel";
import MerchantsCard from "../elements/MerchantsCard";
import Merchants from "../module/landingModule/Merchants";
import MainBanner from "../module/layoutModule/MainBanner";
import CreditPlans from "../module/bank-credit/creditPlans";
import MohasebeAghsat from "../module/landingModule/MohasebeAghsat";
import EvamStore from "../module/landingModule/EvamStore";
import RahnamaPaziran from "../module/landingModule/RahnamaPaziran";
import ProductCategory from "../module/landingModule/ProductCategory";
import ArticleCard from "../elements/ArticleCard";
import ArticleTitle from "../module/articlePage/ArticleTitle";
import MerChantForm from "../module/landingModule/MerChantForm";



export default function LandingHome()  {

    return (
        // <>
        //     <Banner />
        //     <LoanApplicationGuide />
        //     <ProductCategories />
        //     <CreditConditions />
        //     <LoanApplicationProcess />
        //     <LoanReceiptDocuments />
        //     <Merchants from="landing"/>
        //     <InstallmentPurchase />
        //     <Articles />
        //     <SoalatMotadavel/>
        // </>

        <>
            <MainBanner />
            <MohasebeAghsat toPage={"bank-credit"}/>
            <EvamStore />
            <ProductCategory />
            <RahnamaPaziran />
            <MerChantForm />
        </>
    )
}