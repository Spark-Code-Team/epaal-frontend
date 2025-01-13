import Arrows from "../../../../../public/icons/Arrows";

const TableSettlement = () => {
  const data = [
    {
      factornumber: 1,
      startdate: 567,
      date: 123,
      seller: " فاطمه صباغ",
      cost: 111,
      situation: "پرداخت شده",
    },
    {
      factornumber: 2,
      startdate: 567,
      date: 123,
      seller: "نام فروشنده",
      cost: 111,
      situation: "پرداخت شده",
    },
    {
      factornumber: 3,
      startdate: 567,
      date: 123,
      seller: "نام فروشنده",
      cost: 111,
      situation: "پرداخت شده",
    },
    {
      factornumber: 4,
      startdate: 567,
      date: 123,
      seller: "نام فروشنده",
      cost: 111,
      situation: "پرداخت شده",
    },
    {
      factornumber: 5,
      startdate: 567,
      date: 123,
      seller: "نام فروشنده",
      cost: 111,
      situation: "پرداخت شده",
    },
    {
      factornumber: 6,
      startdate: 567,
      date: 123,
      seller: "نام فروشنده",
      cost: 111,
      situation: "پرداخت شده",
    },
  ];
  return (
    <div className="bg-[#FAFCFF] py-4 px-[30px]">

      <table className="min-w-full  table-auto border-collapse ">

        <thead className="bg-[#F0F2F5] text-black text-[16px] h-[63px]  ">

          <tr className="rounded-lg">

            <th className="border-b px-4 py-2 ">
                <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >
            <Arrows color="" size={24}/>
            فاکتورها
                </div>
            </th>

            <th className="border-b px-4 py-2 ">
            <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >
            <Arrows color="" size={24}/>
            تاریخ شروع
                </div>
            </th>

            <th className="border-b px-4 py-2 ">
            <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >
            <Arrows color="" size={24}/>
            تاریخ پایان
                </div>
                </th>

            <th className="border-b px-4 py-2">
            <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >
            <Arrows color="" size={24}/>
            فروشنده
                </div>
            </th>

            <th className="border-b px-4 py-2">
            <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >
            <Arrows color="" size={24}/>
            مبلغ
                </div>
                </th>

            <th className="border-b px-4 py-2">
            <div
                    className="
                        flex
                        items-center
                        justify-center
                    "
                >
            <Arrows color="" size={24}/>
            وضعیت
                </div>
            </th>

          </tr>

        </thead>

        <tbody>

          
          {data.map((person) => (
            <tr key={person.factornumber} className="">
              <td className="border-b px-4 py-5 text-center">{person.factornumber}</td>
              <td className="border-b px-4 py-5 text-center">{person.startdate}</td>
              <td className="border-b px-4 py-5 text-center">{person.date}</td>
              <td className="border-b px-4 py-5 text-center">{person.seller}</td>
              <td className="border-b px-4 py-5 text-center">{person.cost}</td>
              <td className="border-b px-4 py-5 text-center">
                <span className="bg-[#9CF69C] rounded-[20px] 
                py-[10px] px-[20px] text-[#006810] text-[16px]">
                {person.situation}
                </span>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

      

    </div>
  );
};

export default TableSettlement;
