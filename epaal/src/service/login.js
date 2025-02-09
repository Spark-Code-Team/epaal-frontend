import api from "@/config/api"


const sendPhone = async (phone_number) => {

    console.log(phone_number);
    
    try {
        const response = await api.post("users/login/", {
            phone_number : `${phone_number}`
        })

        return { response }
    } catch(error) {
        return { error }
    }
}


export  {
    sendPhone
}