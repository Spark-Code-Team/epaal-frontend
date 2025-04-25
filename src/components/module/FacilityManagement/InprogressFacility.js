export default function InprogressFacility({ facility }) {
  const is_array = Array.isArray(facility);

  return (
    <>
      {is_array == true ? (
        <>
          <div className="mt-2 flex w-full flex-col justify-start gap-5 text-[12px] md:text-[16px]">
            {facility.map((eachFacilityObject) => (
              <div
                key={eachFacilityObject.id}
                className="flex w-full flex-row items-start justify-between rounded-2xl border border-evaamBorderColor p-3 md:w-full"
              >
                <div className="flex w-1/3 flex-row">
                  <div className="flex w-full flex-col items-start justify-between gap-3 md:w-[50%]">
                    <div>وضعیت:</div>
                    <div>مبلغ طرح:</div>
                    <div>طرح اعتباری:</div>
                    <div>مرحله دریافت:</div>
                    <div>مبلغ درخواستی:</div>
                  </div>
                  <div className="flex w-full flex-col items-end justify-between gap-3 md:w-[50%]">
                    <div>در حال انجام</div>
                    <div>
                      {new Intl.NumberFormat("fa-IR").format(
                        eachFacilityObject.facility.max_value,
                      )}{" "}
                      تومان
                    </div>
                    <div>{eachFacilityObject.facility.name}</div>
                    <div>
                      {eachFacilityObject.level == "grade"
                        ? "اعتبار سنجی"
                        : "نامشخص"}
                    </div>
                    <div>
                      {new Intl.NumberFormat("fa-IR").format(
                        eachFacilityObject.given_value,
                      )}
                      تومان
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>دیتایی موجود نیست</p>
        </>
      )}
    </>
  );
}
