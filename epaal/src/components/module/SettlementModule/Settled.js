import { useState } from "react";

const userFormFields = [
    { name: "نام ",  facility: " اسم تسهیلات ", price: "قیمت" ,  date: "تاریخ"},
    { name: "نام ",  facility: " اسم تسهیلات ", price: "قیمت" ,  date: "تاریخ"},
    { name: "نام ",  facility: " اسم تسهیلات ", price: "قیمت" ,  date: "تاریخ"},
    { name: "نام ",  facility: " اسم تسهیلات ", price: "قیمت" ,  date: "تاریخ"},
];

const paymentFormFields = [

    { reason: "علت",  facility: " اسم تسهیلات ", price: "قیمت" ,  situation: "وضعیت"},
    { reason: "علت",  facility: " اسم تسهیلات ", price: "قیمت" ,  situation: "وضعیت"},
    { reason: "علت",  facility: " اسم تسهیلات ", price: "قیمت" ,  situation: "وضعیت"},
    { reason: "علت",  facility: " اسم تسهیلات ", price: "قیمت" ,  situation: "وضعیت"},
];
const Settled = () => {
const [activeForm, setActiveForm] = useState("user");


    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); };


    return(
        

        <div className="w-full flex flex-col items-center justify-center">

        <div className="  bg-[#00397A] w-full h-32 flex items-center justify-center gap-4 mb-4">
            <button
                className={`px-4 py-2 ${
                    activeForm === "user" ? "bg-[#FFC531]" : "bg-white"
                } text-[#00397A] rounded`}
                onClick={() => setActiveForm("user")}
            >
                کاربر
            </button>
            <button
                className={`px-4 py-2 ${
                    activeForm === "payment" ? "bg-[#FFC531]" : "bg-white"
                } text-[#00397A] rounded`}
                onClick={() => setActiveForm("payment")}
            >
                واریزی
            </button>
        </div>

        <div className="bg-[#00397A] w-full mt-20  ">

        <table className="w-full border-collapse">
                    <thead>
                        {activeForm === "user" ? (
                            <tr className="bg-[#00397A] text-white">
                                <th className="p-3 border">نام کاربر</th>
                                <th className="p-3 border">اسم تسهیلات</th>
                                <th className="p-3 border">قیمت</th>
                                <th className="p-3 border">تاریخ</th>
                            </tr>
                        ) : (
                            <tr className="bg-[#00397A] text-white">
                                <th className="p-3 border">علت</th>
                                <th className="p-3 border">اسم تسهیلات</th>
                                <th className="p-3 border">قیمت</th>
                                <th className="p-3 border">وضعیت</th>
                            </tr>
                        )}
                    </thead>
                    <tbody>
                        {activeForm === "user"
                            ? userFormFields.map((user, index) => (
                                  <tr key={index} className="text-center bg-white">
                                      <td className="p-3 border">{user.name}</td>
                                      <td className="p-3 border">{user.facility}</td>
                                      <td className="p-3 border">{user.price}</td>
                                      <td className="p-3 border">{user.date}</td>
                                  </tr>
                              ))
                            : paymentFormFields.map((payment, index) => (
                                  <tr key={index} className="text-center bg-white">
                                      <td className="p-3 border">{payment.reason}</td>
                                      <td className="p-3 border">{payment.facility}</td>
                                      <td className="p-3 border">{payment.price}</td>
                                      <td className="p-3 border">{payment.situation}</td>
                                  </tr>
                              ))}
                    </tbody>
                </table>

        </div>

        

        {/* <button className="bg-blue-700 text-white px-4 py-2 rounded mt-4">
            {activeForm === "user" ? "ثبت اطلاعات کاربر" : "ثبت پرداخت"}
        </button> */}
    </div>
);
}


export default Settled;