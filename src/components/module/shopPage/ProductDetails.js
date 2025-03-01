import LeftAroowBlur from "../../../../public/icons/Admin/AdminShop/LeftAroowBlur";

export default function ProductDetails({ details }) {
  const colors = [
    {
      color: "silver",
      title: "نقره ای",
      mojod: true,
    },
    {
      color: "gold",
      title: "طلایی",
      mojod: false,
    },
    {
      color: "navajowhite",
      title: "کرمی",
      mojod: false,
    },
  ];

  return (
    <div className="w-full px-2 md:w-3/5">
      <div className="flex flex-row items-center w-full gap-5">
        <div className="mt-10 flex w-fit items-center justify-center gap-2 rounded-lg bg-slate-300 p-2 text-[#666464] md:mt-0">
          {details.product_topic.lowlevel_topic.name}
          <LeftAroowBlur height={20} />
        </div>
        <div className="mt-10 flex w-fit items-center justify-center gap-2 rounded-lg bg-slate-300 p-2 text-[#666464] md:mt-0">
          {details.product_topic.name}
          <LeftAroowBlur height={20} />
        </div>
      </div>

      <div className="border-b-[3px] py-5 text-[21px] font-medium">
        {details.name}
      </div>

      <div className="my-5 flex flex-col items-start justify-around">
        <div className="text-lg font-bold">رنگ ها:</div>
        <div className="flex w-full items-center justify-evenly">
          {colors.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 rounded-lg border-[3px] p-2 hover:border-green-600 ${item.mojod ? "cursor-pointer" : "cursor-not-allowed"} ${item.mojod ? "border-solid" : "border-dashed"} `}
            >
              <p>{item.title}</p>
              <div
                className="h-5 w-5 rounded-lg"
                style={{
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* attributes */}
      <div className="my-5 flex w-full flex-row flex-wrap items-center justify-evenly gap-3 overflow-x-scroll">
        {Object.entries(details.field).map(([key, value]) => (
          <div
            key={key}
            className="flex h-24 w-[90%] flex-col items-start justify-evenly rounded-xl bg-gray-200 px-5 shadow-sm md:w-[360px]"
          >
            <div className="font-bold">{key}</div>
            <div className="text-lg font-medium text-evaamGreen">{value}</div>
          </div>
        ))}
      </div>
      {/* attributes */}
      {/* <div className="my-7 flex w-full flex-row items-center justify-center">
        {details[0].memmory.length ? (
          <div className="flex w-4/5 flex-col items-center justify-center">
            <p className="w-4/5 justify-self-end font-bold">حافظه :</p>
            <select className="w-4/5 rounded-lg border-evaamGreen outline-evaamGreen ring-0 focus:border-evaamGreen focus:outline-evaamGreen focus:ring-1 focus:ring-evaamGreen">
              {details[0].memmory.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
        ) : null}
      </div> */}
      {/* <div className="flex w-full flex-row items-center justify-center">
        {details[0].ram.length ? (
          <div className="flex w-4/5 flex-col items-center justify-center">
            <p className="w-4/5 justify-self-end font-bold">RAM :</p>
            <select className="w-4/5 rounded-lg border-evaamGreen outline-evaamGreen ring-0 focus:border-evaamGreen focus:outline-evaamGreen focus:ring-1 focus:ring-evaamGreen">
              {details[0].ram.map((item, index) => (
                <option key={index} className="focus:bg-green-200">
                  {item.ram}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div> */}
    </div>
  );
}
