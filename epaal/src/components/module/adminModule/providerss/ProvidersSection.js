"use client";
import Pagination from "@/components/elements/Pagination";
import { Modal } from "flowbite-react";
import CrossIcon from "../../../../../public/icons/Admin/CrossIcon";
import PlusModal from "../../../../../public/icons/PlusModal";
import { useState } from "react";


const ProvidersSection = () => {

  const data = [
    { id: 1, text: "نام دسته سطح دو" },
    { id: 2, text: "نام دسته سطح دو" },
    { id: 3, text: "نام دسته سطح دو" },
    { id: 4, text: "نام دسته سطح دو" },
    { id: 5, text: "نام دسته سطح دو" },
    { id: 6, text: "نام دسته سطح دو" },
    { id: 7, text: "نام دسته سطح دو" },
    { id: 8, text: "نام دسته سطح دو" },
  ];


  const [boxes , setBoxes] = useState([{
    path: "",
    img: "",
  }]);

  const [openModal , setOpenModal] = useState(true);

  const addBox = ()=>{

    setBoxes((prevBox) => [...prevBox , prevBox.length + 1]);

  }


  return (
    <>
      <div className="bg-[#FAFCFF] h-[93px] flex items-center pr-7 w-full">

        <p className="font-bold text-[20px]">
          انتخاب عنوان دسته بندی سطح دو
        </p>

      </div>

      <div className="w-full mx-auto">

        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center
           bg-[#FAFCFF] p-4 border-b-[1px] border-[#E1E6EF]">

            <span className="text-black">{item.text}</span>

            <button className="bg-[#054366] text-[#F0F0F1] 
            w-[118px] h-12 rounded-[12px] text-center hover:bg-slate-600">
              مشاهده
            </button>

          </div>
        ))}

      </div>


      <Modal show={openModal} dismissible size="xl" style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>

        <div className="w-[728px] h-[664px] rounded-[10px] bg-white mx-auto px-5">

            <div className="flex justify-end mt-4 w-full">
              <button onClick={()=>setOpenModal(false)}>
                <CrossIcon/>
              </button>
            </div>


            <div className="w-full mt-5 px-5">

              <div className="w-[95%] m-auto flex">

                <div className="w-1/2 bg-[#054366] h-[40px] rounded-[12px] justify-center flex items-center text-white">
                  <button>افزودن ارائه دهنده به دسته</button>
                </div>

                <div className="w-1/2 bg-[#C5C5C6] h-[40px] rounded-[12px] justify-center flex items-center">
                  <button>ارائه دهنده های موجود</button>
                </div>

              </div>

            </div>



            <div className="w-full mx-auto mt-5 flex gap-x-6 flex-wrap">

              {
                boxes.map((box , index)=>(
                  <div key={index} className="w-[135px] h-[135px] bg-[#D9D9D9] rounded-[27px] mt-3"></div>
                ))
              }
              
              


              <div className="w-[135px] h-[135px] bg-[#D9D9D9] rounded-[27px] border-[1.5px] border-black mt-3 flex justify-center items-center">
                <button onClick={addBox}>
                  <PlusModal/>
                </button>
              </div>

            </div>


        </div>

      </Modal>


      <Pagination />

    </>
  )
}

export default ProvidersSection;