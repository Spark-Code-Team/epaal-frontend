import UserSidebar from "./UserSidebar";

export default function LayoutUser({ children }) {
  return (
    <>
      <div className="md:flex md:flex-row">
        <div>
          <UserSidebar />
        </div>
        <div className="bg-blue-400">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
