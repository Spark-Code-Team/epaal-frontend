import TickPaper from "@/../public/image/t-paper.svg"
import Paper from "@/../public/image/paper.svg"
import Tick from "@/../public/image/tick.svg"
import Wallet from "@/../public/image/wallet.svg"
import PlansCard from "@/components/elements/PlansCard"

export default function CreditPlans() {

    const conditions = [
        {
            id:1,
            icon: TickPaper ,
            title: "نیاز به حساب بانکی فعال در طرح مربوطه"
        },
        {
            id:2,
            icon: Wallet,
            title: "نیاز به چک صیادی"
        },
        {
            id:3,
            icon: Paper,
            title: "نیاز به استعلام حساب بانکی"
        },
        {
            id:4,
            icon: Tick,
            title: "نیاز به امضا قرارداد در اپلیکیشن بانکی"
        },
    ]


  return (
    <>
      <div className="bg-evaamBackground h-80 w-full lg:px-14 lg:py-10">
        <div className="relative flex h-full w-full bg-white lg:flex-col lg:items-center lg:p-8">
          <div id="text-line" className="h-[1px] w-[80%] bg-green-900"></div>
          <div className="absolute top-5 bg-inherit px-5">
            <p className="text-lg font-bold">طرح های اعتباری و اقساط آن</p>
          </div>
          <div className="flex flex-wrap lg:flex-row w-full h-auto items-center lg:justify-evenly lg:mt-10">
                <PlansCard plans={conditions}/>
          </div>
        </div>
      </div>
    </>
  );
}
