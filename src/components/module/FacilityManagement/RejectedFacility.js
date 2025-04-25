import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function RejectedFacility({ facility }) {
  console.log(" -> done \n", facility);
  const is_array = Array.isArray(facility);

  return (
    <>
      {is_array == true ? (
        facility.map((eachFacilityObject) => (
          <div className="flex w-full gap-6 rounded-3xl border border-[#E2E2E2] p-3">
            <div
              className={`z-0 h-[124px] w-[226px] flex-none cursor-pointer rounded-3xl bg-cover bg-center bg-no-repeat p-4 text-white opacity-100 transition-transform duration-300 md:h-[150px] md:w-[600]`}
              style={{
                background: `url(/image/backCard.png) center/100% 100% no-repeat`,
              }}
            >
              <div className="flex w-full items-center justify-between px-2">
                <p>{eachFacilityObject.facility.name}</p>
              </div>
              <div className="mt-[10px] flex flex-col items-center justify-center md:mt-[14px]">
                <p className="text-[7px] font-bold md:text-[14px]">
                  ارائه تسهیلات تا سقف
                </p>
                <p className="text-[13px] font-bold md:text-[24px]">
                  {new Intl.NumberFormat("fa-IR").format(
                    eachFacilityObject.facility.max_value,
                  )}{" "}
                  تومان
                </p>
              </div>

              <div className="flex w-full items-center justify-between md:mt-[30px]">
                <div className="text-[5px] font-normal md:text-[10px]">
                  {eachFacilityObject.facility.bank.name}
                </div>
                {/* <div className="rounded-xl bg-[#232336b3] px-[5px] py-2 text-[7px] backdrop-blur-[40px] md:text-[14px]">
                        {digitsEnToFa("18")} ماهه
                        </div> */}
              </div>
            </div>
            <div className="flex h-full w-full flex-col gap-4">
              <div className="w-fit rounded-3xl bg-[#FFD8D8] px-[10px] py-1 text-[14px] text-[#9D0000]">
                رد شده
              </div>
              <div className="flex w-full flex-col gap-3 rounded-xl bg-[#E2E2E2] px-[10px] py-1">
                <div>علت:</div>
                <div>{eachFacilityObject.reject_reason_text}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>هیچ دیتایی نیست</>
      )}
    </>
  );
}
