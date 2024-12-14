import { useState } from "react"
import Register from "../module/ReceptivityModule/Register"



export default function ReceptivityPage () {


    const [register, setRegister] = useState({
        name: "",
        phone: "",
        email: "",
        sex: "",
        password: "",
        confirmPassword: ""
    })

    const [receptivity, setReceptivity] = useState({
        faal: "",
        shop: "",
        ostan: "",
        city: "",
        address: "",
        phone: ""
    })

    return (
        <>
            <Register setReceptivity={setReceptivity} receptivity={receptivity} register={register} setRegister={setRegister}/>
        </>
    )
}