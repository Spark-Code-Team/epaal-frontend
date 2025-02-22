import UserSidebar from "./UserSidebar";

export default function LayoutUser({ children }) {
  return (
    <>
      <div className="flex flex-col md:w-full md:flex-row md:bg-evaamBackground">
        <div>
          <UserSidebar />
        </div>

        <div className="hide-scrollbar flex h-svh flex-col items-center overflow-auto px-7 pt-28 md:m-10 md:mt-20 md:h-[620px] md:w-[1084px] md:flex-col md:items-center md:justify-center md:overflow-y-auto md:rounded-3xl bg-white md:bg-scroll md:px-7 md:pt-0">
          {children}
        </div>
      </div>
    </>
  );
}
