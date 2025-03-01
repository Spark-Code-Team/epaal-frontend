export default function ProductOtherDetails({ information }) {
    // console.log("-----------> ", information)
  return (
    <>
      <div className="flex w-full flex-col items-right px-2 justify-between">
        <div className="font-bold text-lg my-3">
        مشخصات محصول
        </div>
        {
            information.map((i) => (
                <div className="flex w-full flex-row items-center justify-between border-b-2 border-b-gray-200 py-5">
                <div className="font-bold">{i.key}</div>
                <div className="w-3/4">{i.value}</div>
              </div>
            ))
        }
        
      </div>
    </>
  );
}
