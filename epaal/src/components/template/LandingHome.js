import Articles from "../elements/Articles.";
import CreditConditions from "../elements/CreditConditions";
import InstallmentPurchase from "../elements/InstallmentPurchase";
import LoanApplicationGuide from "../elements/LoanApplicationGuide";
import LoanApplicationProcess from "../elements/LoanApplicationProcess";
import LoanReceiptDocuments from "../elements/LoanReceiptDocuments";
import ProductCategories from "../elements/ProductCategories";
import RequestedLoan from "../elements/RequestedLoan";
import Banner from "../module/landingModule/Banner";



export default function LandingHome()  {

    return (
        <>
            <Banner />
            <RequestedLoan />
            <LoanApplicationGuide />
            <ProductCategories />
            <CreditConditions />
            <LoanApplicationProcess />
            <LoanReceiptDocuments />
            <InstallmentPurchase />
            <Articles />
        </>
    )
}