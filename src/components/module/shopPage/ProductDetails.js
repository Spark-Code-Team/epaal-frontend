import LeftAroowBlur from "../../../../public/icons/Admin/AdminShop/LeftAroowBlur";

export default function ProductDetails({
  details,
  defaultInstance,
  setDefaultInstance,
}) {
  return (
    <div className="w-full px-2 md:w-3/5">
      <div className="flex w-full flex-row items-center gap-5"></div>

      <div className="border-b-[3px] py-5 text-[21px] font-medium">
        نام کالا: {details.name}
      </div>

      <div className="my-5 flex flex-col items-start justify-around">
        <div className="mb-4 text-lg font-bold">محصولات مشابه این کالا:</div>
        <div className="flex w-full flex-wrap items-center justify-evenly gap-4">
          {details.instances.length !== 0 ? (
            details.instances.map((item, index) => (
              <div
                key={index}
                className={`flex cursor-pointer flex-wrap gap-4 rounded-xl border ${item.id === defaultInstance.id ? "border-4 border-evaamGreen" : "border-gray-500"} p-4 transition-all duration-300 ease-linear hover:scale-105 hover:border-4 hover:border-evaamGreen hover:shadow-md`}
                onClick={() => {
                  setDefaultInstance(item);
                  // setInstanceIndex(index)
                }}
              >
                <div>
                  <p>قیمت:</p>
                  <p>
                    {new Intl.NumberFormat("fa-IR").format(item.price)} تومان
                  </p>
                </div>
                <div>
                  <p>تخفیف:</p>
                  <p>{new Intl.NumberFormat("fa-IR").format(item.discount)}٪</p>
                </div>
                <div>
                  <p>موجودی:</p>
                  <p>
                    {new Intl.NumberFormat("fa-IR").format(item.capacity)} کالا
                  </p>
                </div>

                {item.dynamic_fields
                  ?.slice(0, 2)
                  .map((fieldItem, fieldIndex) => {
                    const isChoosable = fieldItem.field.is_choosable;
                    const fieldName = fieldItem.field.name;
                    const fieldValue = isChoosable
                      ? fieldItem.field_value?.value
                      : fieldItem.value;

                    if (!fieldValue) return null;

                    return (
                      <div key={fieldIndex} className="min-w-[150px]">
                        <p>
                          {fieldName}: {fieldValue}
                        </p>
                      </div>
                    );
                  })}
              </div>
            ))
          ) : (
            <div>هیچ کالای مشابهی وجود ندارد</div>
          )}
        </div>
      </div>

      {/* attributes */}
      <div className="my-5 flex w-full flex-row flex-wrap items-center justify-evenly gap-3 overflow-x-scroll"></div>
    </div>
  );
}
