import api from "@/config/api";
import { toast } from "react-toastify";




const identityAuthReq = async (
  first_name,
  last_name,
  national_code,
  birthday_date,
  second_phone_number,
  otp_code,
) => {
  try {
    const response = await api.post("/users/confirm_information/", {
      first_name,
      last_name,
      national_code,
      birthday_date,
      second_phone_number,
      otp_code,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const secondeOpt = async (second_phone_number) => {
  try {
    const response = await api.post("/users/send_otp_second_phone_number/", {
      second_phone_number,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const addressAuthReq = async (postal_code) => {
  try {
    const response = await api.post("/users/show_address/", {
      postal_code,
    });

    return { response };
  } catch (error) {
    // toast.error(error.response.data.message)
    return { error };
  }
};

const confirmAuthReq = async (id, postal_code, address) => {
  try {
    const response = await api.post("/users/confirm_address/", {
      id,
      postal_code,
      address,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const profileData = async () => {
  try {
  const response = await api.get("/users/profile/");
  return { response };
  } catch (error) {
  return {
  error: error.response?.data?.message || error.message || "Unknown error"
  };
  }
  };


  export const logOut = async (refreshToken) => {
    try{
        const response = await api.post('/users/logout/', {
            refresh_token: refreshToken
        })
        console.log('//////////////->', response)  


        return{response}
    } catch(error){
        toast.error(error.response?.data || "مشکلی پیش آمده")       
        return{error}
    }
}

const allFacility = async () => {
  try {
    const response = await api.get("/facility/get_all_facility");

    return { response };
  } catch (error) {
    return { error };
  }
};

const createFacility = async (
  sheba_number,
  facility_id,
  choosen_value,
  facility_installment_id,
) => {
  try {
    const response = await api.post("/facility/create_facility", {
      sheba_number,
      facility_id,
      facility_installment_id: `${facility_installment_id}`,
      choosen_value,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const startEtebarSanji = async () => {
  try {
    const response = await api.post("/facility/confirm_grade");

    return { response };
  } catch (error) {
    return { error };
  }
};

const sendStatusPhysical = async () => {
  try {
    const response = await api.post("/facility/submit_physical");

    return { response };
  } catch (error) {
    return { error };
  }
};

const getStatusPhysical = async () => {
  try {
    const response = await api.get("/facility/submit_physical");

    return { response };
  } catch (error) {
    return { error };
  }
};

const sendDigiSignature = async () => {
  try {
    const response = await api.post("/facility/digital_signiture");

    return { response };
  } catch (error) {
    return { error };
  }
};

const getPayValue = async () => {
  try {
    const response = await api.get("/facility/prepayment");

    return { response };
  } catch (error) {
    return { error };
  }
};

const postPayValue = async () => {
  try {
    const response = await api.post("/facility/prepayment");

    return { response };
  } catch (error) {
    return { error };
  }
};

const RamzDovom = async () => {
  try {
    const response = await api.post("/facility/send_code_getaway_prepayment");

    return { response };
  } catch (error) {
    return { error };
  }
};

const getlevelfour = async () => {
  try {
    const response = await api.get("/facility/submit_digital");

    return { response };
  } catch (error) {
    return { error };
  }
};

const postlevelfour = async (data) => {
  try {
    const response = await api.post(
      "/facility/submit_digital",
      {
        data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return { response };
  } catch (error) {
    return { error };
  }
};

const userFacility = async () => {
  try {
    const response = await api.get("/facility/inquiry_user_facility");

    return { response };
  } catch (error) {
    return { error };
  }
};

const facilityInformation = async () => {
  try {
    const response = await api.get("/users/my_facility/");

    return { response };
  } catch (error) {
    return { error };
  }
};

const getWallet = async () => {
  try {
    const response = await api.get("/users/wallet/");

    return { response };
  } catch (error) {
    return { error };
  }
};

const getInstallments = async () => {
  try {
    const response = await api.get("/users/my_installment/");

    return { response };
  } catch (error) {
    return { error };
  }
};

const getInstallmentPayment = async (installmentId) => {
  try {
    const response = await api.post("/users/single_installment/", {
      installment_id: installmentId
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

const payInstallmentFinal = async (installmentId) => {
  try {
    const response = await api.post("/users/pay_installment/", {
      installment_id: installmentId
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


const getUserCart = async () => {
  try {
    const response = await api.get("/users/my_cart/");
    return { response };
  } catch (error) {
    return { error };
  }
}

export {
  getUserCart,
  payInstallmentFinal,
  getInstallmentPayment,
  identityAuthReq,
  addressAuthReq,
  confirmAuthReq,
  secondeOpt,
  profileData,
  allFacility,
  createFacility,
  startEtebarSanji,
  getStatusPhysical,
  sendStatusPhysical,
  sendDigiSignature,
  getPayValue,
  postPayValue,
  RamzDovom,
  getlevelfour,
  postlevelfour,
  userFacility,
  facilityInformation,
  getWallet,
  getInstallments,
};
