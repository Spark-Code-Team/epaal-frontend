"use client"

import Trash from "../../../public/icons/Admin/Trash";



export default function AddOption({ option, index, setOption }) {

    console.log(option);

    const hanedlChange = (e) => {
        setOption(e.target.value)
    }
    

    return (
        <div>
            <p>
                آپشن {index + 1}
            </p>
            <input 
                className="
                    w-[375px]
                    h-[42px]
                    rounded-xl
                    p-3
                "
                value={option[index]}
                onChange={(e) => hanedlChange(e)}
            />
            <div>
                <Trash />
            </div>
        </div>
    )
}