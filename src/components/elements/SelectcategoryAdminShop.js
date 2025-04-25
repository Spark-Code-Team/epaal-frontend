import { useEffect, useState } from "react"
import AroowLeft from "../../../public/icons/Admin/AdminShop/AroowLeft"
import { categoryAll } from "@/service/adminShop"
import IntroAddProduct from "./IntroAddProduct"



export default function SelectcategoryAdminShop({ setModalState, modalState, setShowModal, selectedIntro, setSelectedIntro }) {

    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            const { response, error } = await categoryAll() 

            if(response) {
                setCategories(response.data.data)
            } else {
                console.log(error);
            }
        }

        fetchCategory()
    } , [])

    return (
        <>
            <div
                    className="
                        grid
                        grid-cols-2
                        gap-2
                        w-full
                        overflow-y-scroll
                        mt-[58px]
                        max-h-[300px]
                    "
                >
                {
                    categories.length != 0 ? (
                        categories.map(items => (
                            <div
                                key={items}
                                className={`
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    p-[18px]
                                    border
                                    rounded-xl
                                    cursor-pointer
                                    transition-all
                                    ${items.id == selectedIntro.toplevel_topic.id ? "border-blue-600" : null }
                                `}

                                onClick={() => setSelectedIntro(last => ({...last, toplevel_topic: items}))}
                            >
                                <p>
                                    {
                                        items.name
                                    }
                                </p>
                                <div>
                                    <AroowLeft />
                                </div>
                            </div>
                    )
                    )) : (
                        <div
                            className="
                                w-full
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <h1>
                                هیچ دسته بندی یافت نشد
                            </h1>
                        </div>
                    )
                }
            </div>
            
            <IntroAddProduct 
                canGo={selectedIntro.toplevel_topic.id}
                setModalState={setModalState}
                setShowModal={setShowModal}
                modalState={modalState}
            />
        </>
    )
}