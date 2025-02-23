import UserSidebar from "./UserSidebar";

export default function LayoutUser({ children }) {
  return (
    <>
      <div className="flex flex-col md:w-full md:flex-row md:bg-evaamBackground">
        <div>
          <UserSidebar />
        </div>

        <div className="hide-scrollbar bg-white flex h-svh flex-col items-center overflow-x-hidden px-7 pt-28 md:m-10 md:mt-4 md:h-[670px] md:w-[1084px] md:flex-col md:items-center md:justify-center md:overflow-y-auto md:rounded-3xl md:bg-none md:bg-scroll md:px-7 md:pt-0">
          {children}
        </div>
      </div>
    </>
  );
}
