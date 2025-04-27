import Link from "next/link";
import AghsatChart from "./AghsatChart";

const st = [
  {
    titll: "طرح اعتباری:",
    ansewer: "بانک مهر",
  },
  {
    titll: "مهلت تسویه:",
    ansewer: "2 ماه",
  },
  {
    titll: "دفعات بازپرداخت:",
    ansewer: "7 از 8",
  },
  {
    titll: "مبلغ تسویه نشده:",
    ansewer: "450،000 تومان ",
  },
];

export default function GivenFacility({ facility }) {
  console.log("\n drayuaft => \n", facility);

  const is_array = Array.isArray(facility);

  return (
    <>
      {is_array == true ? (
        facility.map((eachFacilityObject) => (
          <div className="relative flex w-full flex-col items-center justify-center rounded-[24px] md:flex-row md:items-center md:justify-start md:gap-4 md:border md:border-[#E1EDF0] md:p-4">
            <AghsatChart
              amount={`${eachFacilityObject.choosen_value}`}
              percentage={(
                (eachFacilityObject.num_of_paid_installment /
                  eachFacilityObject.num_of_installment) *
                100
              ).toFixed(2)}
            />
            <div className="mt-5 flex w-full flex-row items-center gap-3 px-3 md:h-full md:w-[50%]">
              <div
                className="flex w-full flex-col items-start justify-between"
                key={eachFacilityObject.id}
              >
                <div>نام تسهیلات:</div>
                <div>مبلغ تسهیلات:</div>
                <div>تعداد بازپرداخت:</div>
                <div>اقساط پرداخت شده:</div>
                <div>مبلغ هر قسط:</div>
              </div>

              <div className="flex w-full flex-col items-end justify-between">
                <div>{eachFacilityObject.facility.name}</div>
                <div>
                  {new Intl.NumberFormat("fa-IR").format(
                    eachFacilityObject.facility.max_value,
                  )}{" "}
                  تومان
                </div>
                <div>
                  {new Intl.NumberFormat("fa-IR").format(
                    eachFacilityObject.num_of_installment,
                  )}
                </div>
                <div>
                  {new Intl.NumberFormat("fa-IR").format(
                    eachFacilityObject.num_of_paid_installment,
                  )}
                </div>
                <div>
                  {new Intl.NumberFormat("fa-IR").format(
                    eachFacilityObject.price_of_every_installment,
                  )}{" "}
                  تومان
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 flex w-full items-center justify-end">
              <Link
                href="/dashboard/installments"
                className="w-fit rounded-lg bg-evaamGreen p-2 text-xs text-white"
              >
                پرداخت
              </Link>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1>
            <p>دیتایی موجود نیست</p>
          </h1>
        </>
      )}
    </>
  );
}
