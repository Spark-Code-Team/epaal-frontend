"use client"

import Trash from "../../../public/icons/Admin/Trash";



export default function AddOption({ value, option, index, setOption }) {

    const hanedlChange = (e) => {
        
        const copyOption = [...option]
        copyOption[index] = e.target.value

        setOption(copyOption)

    }


    const handelDelete = () => {
        const copyOption = [...option]
        copyOption.splice(index, 1)

        setOption(copyOption)
    }
    

    return (
        <div
            className="
                flex
                w-full
                items-center
                pb-4
            "
        >
            <p
                className="
                    text-[14px]
                    font-medium
                    w-[54px]
                "
            >
                آپشن {index + 1}
            </p>
            <input 
                className="
                    w-[375px]
                    h-[42px]
                    rounded-xl
                    p-3
                    border
                    border-[#E1E6EF]
                    mr-[12px]
                    ml-[6px]
                "
                value={value}
                onChange={(e) => hanedlChange(e)}
                placeholder="نام آپشن"
            />
            <div
                onClick={() => handelDelete()}
                className="
                    border
                    border-[#EB1C24]
                    rounded-xl
                    p-[4px]
                    cursor-pointer
                "
            >
                <Trash />
            </div>
        </div>
    )
}