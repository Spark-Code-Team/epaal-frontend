import BankCredictHesab from "@/components/elements/BankCredictHesab";
import CreditPlans from "../bank-credit/creditPlans";



export default function MohasebeAghsat() {

    return (
        <div
            className="
                w-full
                h-fit
                relative
            "
        >
            <div
                className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        mx-auto
                        w-[80%]
                        bg-white
                        rounded-[54px]
                    "
                >
                    <div
                        className="
                            w-full
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <p
                            className="
                                text-[24px]
                                font-bold
                                text-center
                            "
                        >
                            طرح های اعتباری و اقساط آن   
                        </p>
                    </div>
                    <BankCredictHesab />


                </div>
            </div>
        </div>
    )
}