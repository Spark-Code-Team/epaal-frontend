// react
import { useState } from "react";

// icons
import UserDefault from "../../../../public/icons/UserDefault";

// map input
import { mapInput, mapInputpaz } from "@/constant/AdminForm";



export default function Register({ register, receptivity, setReceptivity, setRegister }) {

    const [showForm, setShowForm] = useState(true)


    const handelRegister = (e) => {

        setRegister({...register, [e.target.name]: e.target.value})

    }

    
    const handelRecptivity = (e) => {

        setReceptivity({...receptivity, [e.target.name]: e.target.value})

    }

    const handelForms = async (item) => {
        if(item == "register") {
            setShowForm(false)
        } else {
            setShowForm(true)
        }
    }

    return (
        <div
           className="
            w-full
            flex
            flex-col
            items-center
            justify-center
           " 
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                "
            >
                <div
                    className="
                        w-[146px]
                        h-[146px]
                        rounded-full
                        bg-[#d9d9d9]
                        flex
                        items-center
                        justify-center
                    "
                >
                    <UserDefault />
                </div>
                {
                    showForm ? (
                        <p
                            className="
                                text-[30px]
                                font-bold
                            "
                        >
                            فرم ثبت نام
                        </p>
                    ) : (
                        <p
                            className="
                                text-[30px]
                                font-bold
                            "
                        >
                            فرم پذیرندگی
                        </p>
                    )
                }
            </div>

            <div
                className="
                    w-full
                    grid
                    grid-cols-2
                    place-items-center
                    gap-4
                "
            >
                {
                    showForm ? (
                            mapInput.map(item => (
                                <div
                                    className="
                                            w-[261px]
                                            flex
                                            flex-col
                                            gap-2
                                        "
                                    key={item.inputName}
                                >
                                    <label 
                                        htmlFor={item.inputName}
                                        className="
                                            text-[20px]
                                            text-[#00397A]
                                        "
                                    >
                                        {item.labelName}
                                    </label>
                                    <input 
                                        className="
                                            rounded-[10px]
                                            border-2
                                            border-[#00397A]
                                            bg-white
                                            h-[44px]
                                            p-2
                                        "
                                        name={item.inputName}
                                        type={(item.inputName == "confirmPassword" || item.inputName == "password") ? "password" : item.inputName == "email" ? "email" : "text"}
                                        onChange={(e) => handelRegister(e)}
                                    />
                            </div>
                        ))
                        
                    ) : (
                        mapInputpaz.map(item => (
                            <div
                                className="
                                        w-[261px]
                                        flex
                                        flex-col
                                        gap-2
                                    "
                                key={item.inputName}
                            >
                                <label 
                                    htmlFor={item.inputName}
                                    className="
                                        text-[20px]
                                        text-[#00397A]
                                    "
                                >
                                    {item.labelName}
                                </label>
                                <input 
                                    className="
                                        rounded-[10px]
                                        border-2
                                        border-[#00397A]
                                        bg-white
                                        h-[44px]
                                        p-2
                                    "
                                    name={item.inputName}
                                    onChange={(e) => handelRecptivity(e)}
                                />
                        </div>
                    ))
                    )
                }
            </div>

            { 
                showForm ? (
                    <div
                        className="
                            w-[261px]
                            h-[44px]
                            bg-[#00397A]
                            rounded-[10px]
                            flex
                            items-center
                            justify-center
                            text-white
                            mt-7
                            cursor-pointer
                        "
                        onClick={() => handelForms("register")}
                    >
                        ثبت نام
                    </div>
                ): (
                    <div
                        className="
                            w-[261px]
                            h-[44px]
                            bg-[#00397A]
                            rounded-[10px]
                            flex
                            items-center
                            justify-center
                            text-white
                            mt-7
                            cursor-pointer
                        "
                        onClick={() => handelForms()}
                    >
                        ثبت
                    </div>
                )
            }
        </div>
    )
}