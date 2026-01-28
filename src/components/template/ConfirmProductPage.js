"use client";

import { useRouter } from "next/navigation";
import CheckCircle from "../../../public/icons/Admin/AdminShop/CheckCircle";

export default function ConfirmProductPage() {
  const router = useRouter();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-[417px] w-[919px] flex-col items-center justify-around rounded-[32px] bg-[#F0F2F5]">
        <p>
          محصول شما با موفقیت ثبت گردید.جهت انتشار در فروشگاه لطفا منتظر تاییدیه
          از سمت ای-وام بمانید.
        </p>
        <div>
          <CheckCircle />
        </div>
        <div
          className="flex h-[44px] w-[167px] cursor-pointer items-center justify-center rounded-xl bg-evaamGreen text-white"
          onClick={() => router.push("/admin/admin-shop/add-product")}
        >
          تایید
        </div>
      </div>
    </div>
  );
}
