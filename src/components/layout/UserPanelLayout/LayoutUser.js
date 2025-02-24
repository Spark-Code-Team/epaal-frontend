import BagSVG from "../../../../public/icons/dashboard/Bag";
import BellSVG from "../../../../public/icons/dashboard/bell";
import UserSidebar from "./UserSidebar";

export default function LayoutUser({ children }) {
  return (
    <>
      <div className="flex flex-col md:w-full md:flex-row md:bg-evaamBackground md:items-center">
        <div>
          <UserSidebar />
        </div>

        <div className="md:flex md:flex-col md:pt-5 justify-center md:w-full">
          <div className="hidden md:flex md:items-center md:justify-end md:px-10">
            <div className="flex w-40 flex-row items-center gap-2">
              <div className="rounded-lg border border-evaamGreen p-1 hover:cursor-pointer">
                <BellSVG fill="#000" width="25" height="25" stroke="" />
              </div>
              <div className="flex flex-row items-center gap-2 rounded-lg bg-evaamGreen p-1 px-2 text-white hover:cursor-pointer">
                <div>
                  <BagSVG fill="#000" width="25" height="25" stroke="" />
                </div>
                <div>سبد خرید</div>
              </div>
            </div>
          </div>
          <div className="hide-scrollbar flex h-svh flex-col items-center overflow-x-hidden bg-white px-7 pt-28 md:m-10 md:mt-4 md:h-[670px] md:w-[90%] md:flex-col md:items-center md:justify-center md:overflow-y-auto md:rounded-3xl md:bg-none md:bg-scroll md:px-7 md:pt-0">
            {children}
          </div>
        </div>
        {/* 
        <div className="hide-scrollbar bg-white flex h-svh flex-col items-center overflow-x-hidden px-7 pt-28 md:m-10 md:mt-4 md:h-[670px] md:w-[1084px] md:flex-col md:items-center md:justify-center md:overflow-y-auto md:rounded-3xl md:bg-none md:bg-scroll md:px-7 md:pt-0">
          {children}
        </div> */}
      </div>
    </>
  );
}
