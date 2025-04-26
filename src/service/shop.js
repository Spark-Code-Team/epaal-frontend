import api from "@/config/api"



const getAllProduct = async () => {
    try {
        const response = await api.post("/product/get_all_product_instance")

        return { response }
    } catch(error) {
        return { error }
    }
}


const getAllField = async (product_topic_id) => {


    try {
        const response = await api.post("/shop/get_field_for_create_product", {
            prouduct_topic_id: product_topic_id
        })

        return { response }
    } catch(error) {
        return { error }
    }
}


export {
    getAllProduct,
    getAllField
}