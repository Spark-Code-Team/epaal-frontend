"use client";

import CardAdmin from "./CardAdmin";
import { Modal } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import CrossIcon from "../../../public/icons/Admin/CrossIcon";
import AddPicture from "../../../public/icons/Admin/AddPicture";
import Image from "next/image";
import PlusAdmin from "../../../public/icons/PlusAdmin";
import { CreateTopLevelTopic, GetAllTopic } from "@/service/adminPanel";
import axios from "axios";
import { getCookie } from "@/utils/cookie";
import { toast } from "react-toastify";

const LevelCategory = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const [addCategory, setAddCategory] = useState({
    name: "",
    image: "",
  });

  const [products, setProducts] = useState([]);

  const [img, setImg] = useState("");

  const formData = new FormData();

  const imageRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await GetAllTopic();

      if (response) {
        console.log(response);
        setProducts(response.data.data);
      }
    };

    fetchData();
  }, []);

  const ImageChange = (e) => {
    setAddCategory((last) => ({ ...last, image: e.target.files[0] }));
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const handelSendData = async () => {
    formData.append("picture", addCategory.image);
    formData.append("name", addCategory.name);

    const token = getCookie("accessToken");

    try {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}product/toplevel_topic`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          toast.success("دسته بندی با موفقیت ساخته شد");
          setAddCategory({ image: "", name: "" });
          setCategoryModal(false);
        });
    } catch (error) {
      console.log(error);
      toast.error(error.data?.message || "مشکلی پیش آمده");
    }
  };

  return (
    <>
      <div className="mx-auto mb-4 w-[94%]">
        <div className="mx-auto mt-8 flex w-full">
          <div className="flex w-1/2 items-center">
            <p className="text-xl">مدیریت دسته بندی ها</p>

            <p className="mr-6 text-base text-[#8A8B8D]">سطح یک</p>
          </div>

          <div className="flex w-1/2 justify-end">
            <button
              className="flex w-[166px] items-center justify-around rounded-md bg-[#054366] p-2 text-[15px] text-white"
              onClick={() => setCategoryModal(true)}
            >
              افزودن دسته جدید
              <PlusAdmin />
            </button>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-wrap">
          {products.length ? (
            products.map((item, index) => (
              <CardAdmin
                  key={index}
                  data={item}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <Modal
        show={categoryModal}
        onClose={() => setCategoryModal(false)}
        dismissible
        size="xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="mx-auto h-[445px] w-[557px] rounded-[10px] bg-white px-7">
          {/* title  */}

          <div className="flex w-full items-center justify-between border-b pb-4 pt-7">
            <p className="pr-2 text-[20px] font-semibold">
              ایجاد دسته جدید (سطح یک)
            </p>
            <div
              onClick={() => setCategoryModal(false)}
              className="cursor-pointer"
            >
              <CrossIcon />
            </div>
          </div>

          {/* name input */}
          <div className="pt-[18px]">
            <p className="pb-3 text-right text-[14px] font-medium">
              نام دسته :
            </p>
            <input
              value={addCategory.name}
              onChange={(e) =>
                setAddCategory((last) => ({ ...last, name: e.target.value }))
              }
              placeholder="نام دسته را وارد کنید"
              className="w-[501px] rounded-xl border-[1px] border-black p-[10px] text-[14px] font-normal"
            />
          </div>

          {/* image input */}
          <div className="pt-[18px]">
            <p className="pb-[18px] text-[14px] font-medium">
              تصویر انتخاب کنید :
            </p>
            <div
              className="flex h-[135px] w-full items-center justify-center border-[1px] border-dashed border-[#6D6E70]"
              onClick={() => imageRef.current.click()}
            >
              {img ? (
                <Image
                  src={img}
                  width={300}
                  height={300}
                  className="h-full w-[300px]"
                  alt="alt"
                />
              ) : (
                <AddPicture />
              )}
            </div>
          </div>

          <div className="flex w-full justify-end py-4">
            <div
              className={`w-[151px] px-6 py-3 ${addCategory.image && addCategory.name ? "bg-[#054366] text-white" : "bg-slate-100 text-black"} cursor-pointer rounded-xl text-center text-[14px]`}
              onClick={() => handelSendData()}
            >
              ایجاد دسته
            </div>
          </div>
        </div>
      </Modal>

      <input
        type="file"
        onChange={(e) => ImageChange(e)}
        ref={imageRef}
        className="hidden"
      />
    </>
  );
};

export default LevelCategory;
