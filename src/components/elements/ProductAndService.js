import { useEffect, useState } from "react";
import AroowLeft from "../../../public/icons/Admin/AdminShop/AroowLeft";
import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import CheckDefaultCategory from "../../../public/icons/Admin/CheckDefaultCategory";
import CheckTrueCategory from "../../../public/icons/Admin/CheckTrueCategory";
import IntroAddProduct from "./IntroAddProduct";
import { ServiceAndProduct } from "@/service/adminShop";

export default function ProductAndService({
  setModalState,
  modalState,
  setShowModal,
  selectedIntro,
  setSelectedIntro,
}) {
  const [categories, setCategories] = useState([]);
  const [isProduct, setIsProduct] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await ServiceAndProduct(
        selectedIntro.toplevel_topic.id,
        isProduct,
      );

      if (response) {
        setCategories(response.data?.data || []);
      } else {
        console.log(error);
      }
    };

    fetchData();
  }, [isProduct]);

  return (
    <>
      <div className="h-[300px] w-full overflow-y-scroll">
        <div className="mt-5 flex items-center gap-2">
          <p className="text-[12px] text-[#868383]">کالای دیجیتال</p>
          <LeftAroowBlur width={24} height={24} />
        </div>

        <div className="mt-[14px] flex w-full gap-7">
          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() => setIsProduct(true)}
          >
            <p>کالا</p>
            {isProduct ? <CheckTrueCategory /> : <CheckDefaultCategory />}
          </div>
          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() => setIsProduct(false)}
          >
            <p>خدمات</p>
            {isProduct ? <CheckDefaultCategory /> : <CheckTrueCategory />}
          </div>
        </div>

        {categories.length == 0 ? (
          <div className="flex w-full items-center justify-center">
            <h1>هیچ دسته بندی یافت نشد</h1>
          </div>
        ) : (
          <div className="mt-[58px] grid max-h-[300px] w-full grid-cols-2 gap-2">
            {categories.map((items) => (
              <div
                key={items}
                className={`flex w-full cursor-pointer items-center justify-between rounded-xl border p-[18px] ${items.id == selectedIntro.midlevel_topic.id ? "border-blue-600" : null} `}
                onClick={() =>
                  setSelectedIntro((last) => ({
                    ...last,
                    midlevel_topic: items,
                  }))
                }
              >
                <p>{items.name}</p>
                <div>
                  <AroowLeft />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <IntroAddProduct
        canGo={selectedIntro.midlevel_topic.id && categories.length}
        setModalState={setModalState}
        setShowModal={setShowModal}
        modalState={modalState}
      />
    </>
  );
}
