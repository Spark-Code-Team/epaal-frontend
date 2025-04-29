import api from "@/config/api"



export const sendShopRequest = async (shop_name, first_name, last_name, phone_number, site_url) => {

    console.log(shop_name, first_name, last_name, phone_number, site_url);
    

    try {
        const response = await api.post("/shop/create_shop_request", {
            shop_name,
            first_name,
            last_name,
            phone_number,
            site_url
        })

        return { response }
    } catch (error) {
        return { error }
    }
}