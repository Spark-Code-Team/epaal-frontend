import Pagination from "@/components/elements/Pagination";


const ProvidersSection = () => {

    const data = [
        { id: 1, text: "نام دسته سطح دو" },
        { id: 2, text: "نام دسته سطح دو" },
        { id: 3, text: "نام دسته سطح دو" },
        { id: 4, text: "نام دسته سطح دو" },
        { id: 5, text: "نام دسته سطح دو" },
        { id: 6, text: "نام دسته سطح دو" },
        { id: 7, text: "نام دسته سطح دو" },
        { id: 8, text: "نام دسته سطح دو" },
      ];


    return (
        <>
       <div className="bg-[#FAFCFF] h-[93px] flex items-center pr-7 w-full">
         
         <p className="font-bold text-[20px]">
         انتخاب عنوان دسته بندی سطح دو
         </p>

       </div>

<div className="w-full mx-auto">

            {data.map((item) => (
    <div
          key={item.id}
          className="flex justify-between items-center
           bg-[#FAFCFF] p-4 border-b-[1px] border-[#E1E6EF]">

          <span className="text-black">{item.text}</span>

          <button className="bg-[#054366] text-[#F0F0F1] 
            w-[118px] h-12 rounded-[12px] text-center hover:bg-slate-600">
            مشاهده
          </button>
          
    </div>
    ))}

</div>


       <Pagination/>
       
       </>
    )
}

export default ProvidersSection;