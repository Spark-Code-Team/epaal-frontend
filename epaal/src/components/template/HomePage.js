import RequestedLoan from "../elements/RequestedLoan";
import LoanApplicationGuide from "../elements/LoanApplicationGuide";
import ProductCategories from "../elements/ProductCategories";
import CreditConditions from "../elements/CreditConditions";
import LoanApplicationProcess from "../elements/LoanApplicationProcess";
import LoanReceiptDocuments from "../elements/LoanReceiptDocuments";
import InstallmentPurchase from "../elements/InstallmentPurchase";
import Articles from "../elements/Articles.";



export default function HomePage() {

    return (
       

        <>
        
            <RequestedLoan/>
            <LoanApplicationGuide/>
            <ProductCategories/>
            <CreditConditions/>
            <LoanApplicationProcess/>
            <LoanReceiptDocuments/>
            <InstallmentPurchase/>
            <Articles/>
        
        </>


    )
}