import api from "@/config/api";

const sendPhone = async (phone_number) => {
  try {
    const response = await api.post("users/send-otp/", {
      phone_number: `${phone_number}`,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const loginOtp = async (phone_number, otp_code, password) => {
  try {
    const response = await api.post("users/login/", {
      phone_number: `${phone_number}`,
      otp_code,
      password: password,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

const userRole = async () => {
  try {
    const response = await api.get("/users/home/");
    console.log(response);

    return { response };
  } catch (error) {
    console.log(error);

    return { error };
  }
};

export { sendPhone, loginOtp, userRole };
