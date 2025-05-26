import api from "@/config/api";

export async function GETAllWaitingUserFacitilty() {
  try {
    const response = await api.get("Admin/get_all_waiting_facility");

    return { response };
  } catch (error) {
    return { error };
  }
}

export async function GETWaitedUserFacitiltyClues(user_facility_id) {
  try {
    const response = await api.post("Admin/get_user_file", {
      user_facility_id,
    });

    return { response };
  } catch (error) {
    return { error };
  }
}

export async function POSTRejectDigitalFacitiltyClues(object) {
  try {
    const response = await api.post("Admin/reject_facility", object);

    return { response };
  } catch (error) {
    return { error };
  }
}

export async function POSTAcceptDigitalFacitiltyClues(object) {
  try {
    const response = await api.post("Admin/confirm_waitnig_digital", object);

    return { response };
  } catch (error) {
    return { error };
  }
}

export async function POSTAcceptPhysicalFacitiltyClues(object) {
  try {
    const response = await api.post("Admin/confirm_waitnig_physical", object);

    return { response };
  } catch (error) {
    return { error };
  }
}


export async function POSTAcceptFinalFacitilty(faciliryId) {
  try {
    const response = await api.post("Admin/confirm_final_waiting", {
      user_facility_id: faciliryId
    });

    return { response };
  } catch (error) {
    return { error };
  }
}


export async function GetAllRequest() {
  try {
    const response = await api.get("Admin/all_shop_request")

    return { response }
  } catch( error ) {
    return { error }
  }
}


export async function GetAllTopLevelTopic() {
  try {
    const response = await api.post("product/get_all_toplevel_topic")

    return { response }
  } catch (error) {
    return { error }
  }
}

export const GetAllTopic = async () => {

    try {
        const response = await api.post("product/get_all_toplevel_topic")
    
        return { response }
    } catch(error) {
        return { error }
    }
}

export const GetAllMidlevel = async () => {

  try {
    const response = await api.post("/product/get_all_midlevel_topic")

    return { response }
  } catch(error) {
    return { error }
  }
}

export const GetAllLowlevel = async () => {
  try {
    const response = await api.post("product/get_all_lowlevel_topic")

    return { response }
  } catch (error) {
    return { error }
  }
}

export const GetAllTopicProduct = async () => {

  try {
    const response = await api.post("product/get_all_product_topic")

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteTopLevel = async (id) => {

  try {
    const response = await api.delete("product/delete_toplevel_topic", {
      data: {
        toplevel_topic: id
      } 
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteMidlevelTopic = async (midlevel_topic) => {
  try {
    const response = await api.delete("product/delete_midlevel_topic", {
      data: {
        midlevel_topic
      }
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteLowlevelTopic = async (lowlevel_topic) => {
  try {
    const response = await api.delete("product/delete_lowlevel_topic", {
      data: {
        lowlevel_topic
      }
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteTopLevelProduct = async (product_topic) => {
  try {
    const response = await api.delete("product/delete_product_topic", {
      data: {
        product_topic
      }
    })

    return { response }
  } catch (error) {
    return { error }
  }
}