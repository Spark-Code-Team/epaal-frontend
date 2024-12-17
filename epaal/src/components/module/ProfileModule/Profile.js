
const Profile = () => {
    return(


        <div className="w-full mt-11 border-t-[1px] border-[#000000]">

            <div className="w-3/4 h-80 mx-auto mt-10 bg-[#00397A] rounded-md">
            
               <p className="text-white text-center pt-6">مشخصات کاربری</p>

               <div className="flex flex-row h-52">

                  <div className="w-1/2 flex flex-col justify-around ">
                  <div className="mx-auto flex flex-col bg-white rounded-md w-40 h-9 justify-around">
                        <p className="text-center my-auto">
                            نام کامل
                        </p>
                     </div>
                     <div className="mx-auto flex flex-col bg-white rounded-md w-40 h-9 justify-around">
                        <p className="text-center my-auto">
                            نام کامل
                        </p>
                     </div>
                  </div>

                  <div className="w-1/2 flex flex-col justify-around ">
                  <div className="mx-auto flex flex-col bg-white rounded-md w-40 h-9 justify-around">
                        <p className="text-center my-auto">
                            نام کامل
                        </p>
                     </div>

                     <div className="mx-auto flex flex-col bg-white rounded-md w-40 h-9 justify-around">
                        <p className="text-center my-auto">
                            نام کامل
                        </p>
                     </div>
                  </div>

               </div>

               <div className="flex flex-row w-40 h-9 rounded-md m-auto bg-white justify-center ">
                 <p className="text-center my-auto">
                            نام کامل
                 </p>
               </div>

            </div>

            <div className="w-3/4 h-16 mx-auto mt-28 bg-[#00397A] rounded-md">
                <p className="text-white text-center pt-6"> اسم تسهیلات </p>
            </div>

        <div className="w-3/4 h-60 flex justify-around mx-auto my-10 bg-[#00397A] rounded-md">

            <div className="">
                <div className="bg-white w-60 h-40 mt-10 rounded-md"></div>
            </div>

            <div className="mt-10">
                <p className="text-white leading-10">اسم تحصیلات</p>
                <p className="text-white leading-10">اسم تحصیلات</p>
                <p className="text-white leading-10">اسم تحصیلات</p>
            </div>

            <div className="mt-10">
                <p className="text-white leading-10">اسم تحصیلات</p>
                <p className="text-white leading-10">اسم تحصیلات</p>
                <p className="text-white leading-10">اسم تحصیلات</p>
            </div>

        </div>
    </div>

    )
}
export default Profile;