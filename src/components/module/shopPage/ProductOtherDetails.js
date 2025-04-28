export default function ProductOtherDetails({ statics = [], dynamics = [] }) {

  console.log("0000000000000000000000000000000000000000000000000000000000000000000",{statics, dynamics});
  const newDynamic = dynamics.dynamic_fields ? dynamics.dynamic_fields : []
  const allFields = [...statics, ...newDynamic];

  return (
    <div className="flex w-full flex-col px-4">
      <div className="my-5 text-2xl font-extrabold text-gray-800">مشخصات محصول</div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allFields.map((item, index) => {
          if (!item?.field) return null;

          const title = item.field.name || "عنوان نامشخص";
          const value = item.field.is_choosable
            ? item.field_value?.value || "مقدار مشخص نشده"
            : item.value || "مقدار مشخص نشده";

          return (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-2 text-sm font-semibold text-gray-600">{title}</div>
              <div className="text-lg font-bold text-gray-800">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
