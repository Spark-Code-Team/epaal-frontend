import { formatPersianDate } from "@/utils/toJalali";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

export default function NotPaidInstallmentModule({ notPaid }) {
  const router = useRouter();
  const isArray = Array.isArray(notPaid);

  const getEarliestInstallmentId = (list) => {
    if (!list.length) return null;
    return list.reduce((earliest, current) =>
      new Date(current.due_date) < new Date(earliest.due_date)
        ? current
        : earliest,
    ).id;
  };

  const payableInstallmentId = getEarliestInstallmentId(notPaid);

  const handlePay = (installmentId) => {
    sessionStorage.setItem("selectedInstallment", installmentId);
    router.push("/payment");
  };

  return (
    <>
      {isArray ? (
        <div className="my-2">
          {notPaid.map((eachNotPaidInstallment) => {
            const isPayable =
              eachNotPaidInstallment.id === payableInstallmentId;

            return (
              <div
                key={eachNotPaidInstallment.id}
                className={`my-2 h-auto w-full rounded-2xl border ${isPayable ? "border-red-500" : "border-evaamBorderColor text-gray-400"} px-5 py-4`}
              >
                <p>
                  شماره قسط:{" "}
                  {digitsEnToFa(eachNotPaidInstallment.installment_number)}
                </p>

                <p>
                  وضعیت:{" "}
                  {eachNotPaidInstallment.status === "not_paid"
                    ? "پرداخت نشده"
                    : "نامشخص"}
                </p>

                <p>
                  تاریخ ایجاد قسط:{" "}
                  {new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(eachNotPaidInstallment.created_at))}
                </p>

                <p>
                  موعد سررسید قسط:{" "}
                  {digitsEnToFa(
                    formatPersianDate(eachNotPaidInstallment.due_date),
                  )}
                </p>

                <p>تاریخ پرداخت: پرداخت نشده</p>

                {isPayable && (
                  <>
                    <div>--------------------------------</div>

                    <p>
                      مبلغ قسط ( بدون حساب جریمه ):{" "}
                      {new Intl.NumberFormat("fa-IR").format(
                        eachNotPaidInstallment.amount.toFixed(2),
                      )}{" "}
                      تومان
                    </p>

                    <p>
                      مبلغ قسط{" "}
                      <span className="font-bold text-red-800">
                        ( با احتساب جریمه )
                      </span>
                      :{" "}
                      {new Intl.NumberFormat("fa-IR").format(
                        eachNotPaidInstallment.final_amount.toFixed(2),
                      )}{" "}
                      تومان
                    </p>
                    <button
                      className="mt-3 rounded-xl bg-green-600 px-4 py-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-md"
                      onClick={() => handlePay(eachNotPaidInstallment.id)}
                    >
                      پرداخت این قسط
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <>دیتایی موجود نیست</>
      )}
    </>
  );
}
