import Image from "next/image";

const Admin = ()=>{

    const items = [1 , 2 , 3 , 4 , 5];

    return(

        <>

            <div className="w-full pr-10 pl-10 flex justify-between">




                <div className="w-full">

                    <div className="w-full">
                        <button className="btn w-36 bg-[#00397A] text-white p-2 rounded-md mt-3">افزودن ادمین جدید</button>
                    </div>


                    {
                        items.map((item , index)=>(

                            <div key={index} className="w-full bg-[#D9D9D9] m-auto mt-12 flex pr-4 pt-1 pb-1 rounded-md">

                                <div className="w-[25%] flex justify-around">

                                    <div className="w-10 h-10 bg-[#00397A] rounded-full flex justify-center items-center">
                                        <Image src="/image/user.png" width={17} height={17} alt=""/>
                                    </div>

                                    <div className="w-40 flex items-center">نام پذیرنده</div>

                                </div>


                                <div className="w-[75%] flex justify-end">

                                    <div className="w-72 flex justify-between pr-10 pl-10">

                                        <div className="w-10 h-10 flex justify-center items-center">
                                            <button>
                                                <Image src="/image/edit.png" width={23} height={23} alt=""/>
                                            </button>
                                        </div>

                                        <div className="w-10 h-10 flex justify-center items-center">
                                            <button>
                                                <Image src="/image/info.png" width={23} height={23} alt=""/>
                                            </button>
                                        </div>

                                        <div className="w-10 h-10 flex justify-center items-center">
                                            <button>
                                                <Image src="/image/wallet.png" width={23} height={23} alt=""/>
                                            </button>
                                        </div>

                                        <div className="w-10 h-10 flex justify-center items-center">
                                            <button>
                                                <Image src="/image/delete.png" width={23} height={23} alt=""/>
                                            </button>
                                        </div>

                                    </div>

                                </div>


                            </div>

                        ))
                    }


                </div>

            </div>

        </>

    )

}


export default Admin;