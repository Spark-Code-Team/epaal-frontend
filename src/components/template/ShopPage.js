import ShopCart from "../elements/ShopCart";
import ShopTitle from "../elements/ShopTitle";

const alaki = [1, 2, 3, 4, 5, 6, 7, 8]

export default function shop() {
  return (
    <>
      {/* <div className="my-10 flex h-screen w-full flex-col items-center justify-self-center bg-green-100 md:w-[90%]">
        <div
          className="flex h-96 w-[95%] flex-row items-center bg-[length:200%_400%] bg-center bg-no-repeat object-contain"
          style={{
            backgroundImage: `url("/image/main-banner.svg")`,
          }}
        >
          <div className="flex w-1/2 flex-col h-[80%] items-start p-16 justify-evenly bg-blue-100">
            <div>
              <h1 className="font-extrabold text-3xl text-white">
                خرید اعتباری با ایوام
              </h1>
            </div>
            <div>
              <p className="font-bold text-lg text-white">
              با دریافت طرح های اعتبای میتوانید خرید خود را به صورت اقساط انجام دهید.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between bg-white text-evaamGreen py-2 px-4 rounded-xl">
              <div>دریافت طرح اعتباری</div>
              <div></div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-evenly bg-green-200">
            چپ
          </div>
        </div>
      </div> */}

      <div
        className="
          w-full
          px-3
        "
      >
        <ShopTitle 
          title="پربازدیدترین محصولات موتورسیکلت"
        />
        <div
          className="
            flex
            gap-[20px]
            overflow-x-scroll
            w-full
            my-7
            py-2
          "
        >
          {
            alaki.map(item => (
              <ShopCart 
                key={item}
              />
            ))
          }
        </div>
      </div>

    </>
  );
}
