"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MerchantsCard({ merchants }) {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center lg:flex-col md:flex-col md:mt-10">
        <div className="mb-10 border-b-2 border-green-900 text-center lg:w-1/2 lg:pb-5 md:w-1/3 md:pb-4">
          <p>فروشگاه های ایوام</p>
        </div>
        <div className="flex flex-wrap gap-5 lg:w-full lg:flex-row lg:justify-evenly ">
          {merchants && merchants.length != 0 ? (
            <>
              {merchants.map((eachMerchant) => (
                <button
                  key={eachMerchant.id}
                  className="bg-evaamBackground flex rounded-xl p-5 shadow-xl transition-all duration-300 ease-in-out hover:scale-110 flex-col items-center justify-between md:flex-col "
                >
                  <Image
                    src={eachMerchant.merchantLogo}
                    height={100}
                    width={100}
                    alt="merchant logo"
                  />
                  <p className="text-green-900">{eachMerchant.merchantName}</p>
                </button>
              ))}
            </>
          ) : (
            <>
              <p>هیچ فروشگاهی نیست</p>
            </>
          )}
        </div>

        <button
          className="mt-16 animate-pulse bg-evaamCyan text-green-900 rounded-xl p-5 shadow-lg"
          onClick={() => {
            router.push("/shopping-evaam");
          }}
        >
          <p>مشاهده فروشگاه ها</p>
        </button>
      </div>
    </>
  );
}
