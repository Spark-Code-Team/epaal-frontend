import { redirect } from "next/navigation";

export default function UserDashboard() {
  redirect("/dashboard/get-credit")
  return (
    <>
      <h1>user dashboard</h1>
    </>
  );
}
