"use client";

import { getInstallments } from "@/service/userPanel";
import { useEffect, useState } from "react";
import PaidInstallmentModule from "./PaidInstallmentModule";
import NotPaidInstallmentModule from "./NotPaidInstallmentModule";

export default function InstallmentsModule() {
  const [status, setStatus] = useState(1);

  const [installment, setInstallment] = useState({
    paid: [],
    not_paid: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInstallment = async () => {
      setLoading(true);

      const { response, error } = await getInstallments();

      if (response) {
        setInstallment({
          paid: response.data.paid,
          not_paid: response.data.not_piad,
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchInstallment();
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="m-auto flex h-[95%] w-[95%] flex-col">
        <div className="flex h-[10%] w-full flex-row items-center justify-start gap-5 border-b border-b-evaamBorderColor pr-10 pb-3">
          <div
            className={`flex flex-row items-center justify-center rounded-2xl ${status == 1 ? "bg-green-300" : "border border-green-500"} px-4 pt-2 transition-all ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-md`}
            onClick={() => {
              setStatus(1);
            }}
          >
            پرداخت شده
          </div>
          <div
            className={`flex flex-row items-center justify-center rounded-2xl ${status == 2 ? "bg-red-400" : "border border-red-500"} px-4 pt-2 transition-all ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-md`}
            onClick={() => {
              setStatus(2);
            }}
          >
            پرداخت نشده
          </div>
        </div>
        {status == 1 ? (
          <PaidInstallmentModule paid={installment.paid} />
        ) : (
          <NotPaidInstallmentModule notPaid={installment.not_paid} />
        )}
      </div>
    </>
  );
}
