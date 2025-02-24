import api from "@/config/api"



const identityAuthReq = async (first_name, last_name, national_code, birthday_date, second_phone_number, otp_code) => {

    try {
        const response = await api.post("/users/confirm_information/", {
            first_name,
            last_name,
            national_code,
            birthday_date,
            second_phone_number,
            otp_code
        })
    
        return { response }
    } catch (error) {
        return { error }
    }
}

const secondeOpt = async (second_phone_number) => {

    try {
        const response = await api.post("/users/send_otp_second_phone_number/", {
            second_phone_number
        })

        return { response }
    } catch (error) {
        return { error }
    }
}

const addressAuthReq = async (postal_code) => {
    try {
        const response = await api.post("/users/show_address/", {
            postal_code
        })

        return { response }
    } catch(error) {
        return { error }
    }
} 

const confirmAuthReq = async (id, postal_code, address) => {
    
    try {
        const response = await api.post("/users/confirm_address/", {
            id,
            postal_code,
            address
        })

        return { response }
    } catch(error) {
        return { error }
    }
}

const profileData = async () => {
    try {
        const response = await api.get("/users/profile/")

        return { response }
    } catch(error) {
        return { error }
    }
}


export {
    identityAuthReq,
    addressAuthReq,
    confirmAuthReq,
    secondeOpt,
    profileData 
}