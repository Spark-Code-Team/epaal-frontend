import Articles from "../elements/Articles.";
import CreditConditions from "../elements/CreditConditions";
import InstallmentPurchase from "../elements/InstallmentPurchase";
import LoanApplicationGuide from "../elements/LoanApplicationGuide";
import LoanApplicationProcess from "../elements/LoanApplicationProcess";
import LoanReceiptDocuments from "../elements/LoanReceiptDocuments";
import ProductCategories from "../elements/ProductCategories";
import Banner from "../module/landingModule/Banner";
import SoalatMotadavel from "../elements/SoalatMotadavel";



export default function LandingHome()  {

    return (
        <>
            <Banner />
            <LoanApplicationGuide />
            <ProductCategories />
            <CreditConditions />
            <LoanApplicationProcess />
            <LoanReceiptDocuments />
            <InstallmentPurchase />
            <Articles />
            <SoalatMotadavel/>
        </>
    )
}