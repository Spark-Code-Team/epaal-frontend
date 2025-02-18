const HeaderSettlement = () => {

    return (
        <div className="w-full h-[98px] bg-[#FAFCFF] flex items-center">

            <div className="pr-[30px] w-[20%]">
                <p className="text-[20px] font-bold">
                    تسویه فروشندگان
                </p>
            </div>


            <div className=" w-[80%] mr-[50px] ml-[30px] rounded-[10px] border-[1px] border-[#E2E2E2]">

                <ul className="flex items-center justify-around text-[15px] h-[54px] text-[#6D6E70]">
                    <li className="w-[125px] h-[42px] bg-[#054366] text-white p-[10px] rounded-[8px]">همه وضعیت ها</li>
                    <li>نیاز به تایید فروشگاه</li>
                    <li>تایید نشده</li>
                    <li>پیش از موعد تسویه</li>
                    <li>آماده تسویه</li>
                    <li>تسویه شده</li>

                </ul>

            </div>


        </div>
    )
}
export default HeaderSettlement;