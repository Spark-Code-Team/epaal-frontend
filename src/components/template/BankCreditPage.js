import BankBanner from "../module/bank-credit/BankBanner";
import CreditPlans from "../module/bank-credit/creditPlans";

export default function BankCreditPage () {
    return (
        <div className="mx-auto w-full h-full">
            <BankBanner/>
            <CreditPlans/>
        </div>
    )
}