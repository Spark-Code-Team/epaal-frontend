export default function FacilityFinished({ facility }) {
  console.log(" -> done \n", facility);
  const is_array = Array.isArray(facility);

  return (
    <>
      {is_array == true ? (
        facility.map((eachFacilityObject) => (
          <div className="relative flex w-full flex-col items-center justify-center rounded-[24px] md:flex-row md:items-center md:justify-start md:gap-4 md:border md:border-[#E1EDF0] md:p-4">
            {/* <AghsatChart amount="10000" percentage={100} /> */}
            <div className="flex flex-col items-center gap-6 rounded-[24px] border p-3 text-center">
              <p className="text-[16px] font-medium">
                طرح
                <br />
                اعتباری
              </p>
              <p className="text-[18px] font-bold">
                {eachFacilityObject.facility.bank.name}
              </p>
            </div>

            <div className="mt-5 flex w-full flex-row items-center gap-3 px-3 md:h-full md:w-[50%]">
              <div
                className="flex w-full flex-col items-start justify-between"
                key={eachFacilityObject.id}
              >
                <div>نام تسهیلات:</div>
                <div>مبلغ تسهیلات:</div>
                <div>تعداد بازپرداخت:</div>
                <div>اقساط پرداخت شده:</div>
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
                    eachFacilityObject.num_of_installment,
                  )}
                </div>
              </div>
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
