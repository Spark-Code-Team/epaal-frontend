import { useEffect, useState } from "react";
import CheckDefaultCategory from "../../../public/icons/Admin/CheckDefaultCategory";
import CheckTrueCategory from "../../../public/icons/Admin/CheckTrueCategory";
import { useDispatch } from "react-redux";
import { addDynamic, addStatic } from "@/redux/features/selectStaticAndDynamic/selectStaticAndDynamic";



export default function SelectField({ item }) {

    const [isConstant, setIsConstant] = useState("")
    const dispatch = useDispatch()


    const handelFields = (subject) => {

        if(subject == "dynamic") {
            setIsConstant("dynamic")
            dispatch(addDynamic(item))
        } else {
            setIsConstant("constant")
            dispatch(addStatic(item))
        }
    }

    return (
                    <div
                        className="
                            w-[80%]
                            flex
                            justify-around
                            mx-auto
                            mb-4
                        "
                    >
                        <div
                            className="
                                w-1/2
                            "
                        >
                            <p>
                                {
                                    item.name
                                }
                            </p>
                        </div>
                        <div
                            className="
                                flex
                                justify-between
                                w-1/2
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    cursor-pointer
                                "
                                onClick={() => handelFields("constant")}
                            >
                                {
                                    isConstant == "constant" ? (
                                        <CheckTrueCategory />
                                    ) : (
                                        <CheckDefaultCategory />
                                    )
                                }
                                ثابت
                            </div>
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    cursor-pointer
                                "
                                onClick={() => handelFields("dynamic")}
                            >
                                {
                                    isConstant == "dynamic" ? (
                                        <CheckTrueCategory />
                                    ) : (
                                        <CheckDefaultCategory />
                                    )
                                }
                                متغیر
                            </div>
                        </div>
                    </div>
    )
}