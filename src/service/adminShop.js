import api from "@/config/api"



const categoryAll = async () => {
    try {
        const response = await api.post("/product/get_all_toplevel_topic")

        return { response } 
    } catch (error) {
        return { error }
    }
}


const ServiceAndProduct = async (toplevel_topic, is_product) => {
    try {
        const response = await api.post("/product/get_all_midlevel_topic", {
            toplevel_topic,
            is_product
        })

        return { response }
    } catch(error) {
        return { error }
    }

}

const LowlevelCategoryAll = async (midlevel_topic) => {
    try {
        const response = await api.post("/product/get_all_lowlevel_topic", {
            midlevel_topic
        })

        return { response }
    } catch(error) {
        return { error }
    }
}

const AllProductTopic = async (lowlevel_topic) => {
    try {
        const response = await api.post("/product/get_all_product_topic", {
            lowlevel_topic
        })

        return { response}
    } catch(error) {
        return { error }
    }
}

const CreateProduct = async (data) => {
    try {
        const response = await api.post("/product/create_product",
            data,
          
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },)

        return { response }
    } catch(error) {
        return { error }
    }
}


export {
    categoryAll,
    ServiceAndProduct,
    LowlevelCategoryAll,
    AllProductTopic,
    CreateProduct,
}