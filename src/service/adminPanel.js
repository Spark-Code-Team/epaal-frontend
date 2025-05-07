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