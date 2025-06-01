"use client";

import { sidebarOptions } from "@/constant/AdminForm";
import ArrowLeft from "../../../../public/icons/Admin/ArrowLeft";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/elements/Logo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole } from "@/redux/features/userRole/useRole";


export default function SidebarAdmin() {
  const [selectOption, setSelectOption] = useState(false);


  const store = useSelector(store => store)
  const dispatch = useDispatch()
  // const router = useRouter()
  

  useEffect(() => {
    if(!store.role.id) {
      dispatch(fetchRole())
    }

    console.log(store.role);
    
  }, [])

  const handelSelect = (title) => {
    if (title == selectOption) {
      setSelectOption(false);
    } else {
      setSelectOption(title);
    }
  };

  return (
    <div className="h-screen border-l-[1px] bg-white">
      <div className="h-[10%] flex flex-row items-center px-2">
        <Logo height="50" width="50" color="#1D434C"/>
      </div>
      <div className="no-scrollbar h-[90%] overflow-y-scroll">
        { store.role.role ? (sidebarOptions[store.role.role].map((item, index) => (
          <div
            className={`flex flex-col ${selectOption == item.title ? "h-fit bg-[#0543660d]" : "h-[15%]"} h-[15%] w-full p-1 transition-all`}
            key={index}
          >
            <Link
              className="flex w-full cursor-pointer items-center justify-between gap-1"
              onClick={() => handelSelect(item.title)}
              href={item.link}
            >
              <div
                className={`min-h-5 min-w-1 ${selectOption == item.title ? "rounded-l-full bg-[#054366]" : ""} `}
              ></div>
              <div className="flex w-[95%] items-center justify-between transition-all hover:scale-105">
                <div className="flex items-center gap-1">
                  {item.icon}
                  <p>{item.title}</p>
                </div>
                <div
                  className={`w-[20%] text-[#054366] transition-all ${item.children.length == 0 ? "hidden" : ""} `}
                >
                  <ArrowLeft
                    rotate={selectOption == item.title ? true : false}
                  />
                </div>
              </div>
            </Link>
            <div
              className={` ${selectOption == item.title ? "flex flex-col gap-2" : "hidden"} py-6 pr-5`}
            >
              {item.children.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-[14px] hover:text-[#054366]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))) : <p>Loading...</p>}
      </div>
    </div>
  );
}
