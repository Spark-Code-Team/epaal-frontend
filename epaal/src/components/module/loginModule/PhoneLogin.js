const PhoneLogin = () => {
    return (
        <>

    <div className="h-screen flex flex-col">
      
      <div className="relative h-1/2 bg-blue-500">
        
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,197.3C672,203,768,213,864,197.3C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

      </div>

      <div className="bg-white relative p-6 rounded-lg shadow-lg w-80">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-gray-700">ایوام</h1>
          </div>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="شماره تلفن را وارد کنید"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              دریافت کد
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4 text-center">
            همه داده‌ها مطابق با قوانین حریم خصوصی است.
          </p>
        </div>
      
      <div className="h-1/2 bg-white flex items-center justify-center">
        {/* فرم ورود */}
       
      </div>
    </div>







        

        {/* <div className="w-full h-[800px] bg-[#054366] flex flex-col">

            <div className=" h-1/2 bg-red-500 relative">

            </div>
            
            <div className="w-[402px] h-[314px] border-l-orange-500 absolute">

            </div>

        

        </div> */}
       
        </>
    )
}
export default PhoneLogin;