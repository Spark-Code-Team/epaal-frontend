import { formatPersianDate } from "@/utils/toJalali";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function PaidInstallmentModule({ paid }) {
  const isArray = Array.isArray(paid);

  return (
    <>
      {isArray == true ? (
        <div className="my-2">
          {paid.map((eachPaidInstallment) => (
            <div
              key={eachPaidInstallment.id}
              className="h-auto w-full rounded-2xl border border-green-400 px-5 py-4 my-2"
            >
              <p>
                شماره قسط:{" "}
                {digitsEnToFa(eachPaidInstallment.installment_number)}
              </p>

              <p>
                وضعیت:{" "}
                {eachPaidInstallment.status == "paid" ? "پرداخت شده" : "نامشخص"}
              </p>
              <p>
                تاریخ ایجاد قسط:{" "}
                {new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(eachPaidInstallment.created_at))}
              </p>
              <p>
                تاریخ پرداخت:{" "}
                {digitsEnToFa(formatPersianDate(eachPaidInstallment.paid_date))}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <>دیتایی موجود نیست</>
      )}
    </>
  );
}
