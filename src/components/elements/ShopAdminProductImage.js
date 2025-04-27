import { useEffect, useRef, useState } from "react";
import AddPicture from "../../../public/icons/Admin/AddPicture";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addPictures } from "@/redux/features/addProduct/addProduct";



export default function ShopAdminProductImage ({setImages, images, index}) {
    
    const imageRef = useRef()
    const [picture, setPicture] = useState("")

    const store = useSelector(store => store.addProduct)
    const dispatch = useDispatch()

    const handelImage = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]))
        setImages(last => [...last, e.target.files[0]])    
    }

    useEffect(() => {
        dispatch(addPictures(images))
    }, [images])

    useEffect(() => {
        console.log(store);
        
    }, [store])


    return (
        <li
            onClick={() => imageRef.current.click()}
        >
            <div
                className="
                    rounded-[10px]
                    w-[167px]
                    h-[167px]
                    bg-[#E1EDF0]
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                "
            >
                {
                    picture ? (
                        <Image 
                            width={500}
                            height={500}
                            src={picture}
                            alt="image"
                        />
                    ) : (
                        <AddPicture />
                    )
                }

                <input
                    type="file"
                    className="
                        hidden
                    "
                    ref={imageRef}
                    onChange={(e) => handelImage((e))}
                />
            </div>
        </li>
    )
}