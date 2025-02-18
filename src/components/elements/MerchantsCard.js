"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MerchantsCard({ merchants, from }) {
  const router = useRouter();

  return (
    <>
      <div className="mt-14 flex flex-col items-center md:mt-10">
        <div className="mb-10 border-b-2 border-green-900 text-center md:w-1/3 md:pb-4 lg:w-1/2 lg:pb-5">
          <p>
            {from == "landing"
              ? "فروشگاه های ایوام"
              : "قابل استفاده در فروشگاه های فعال ایوام"}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 lg:w-full lg:flex-row lg:justify-evenly">
          {merchants && merchants.length != 0 ? (
            <>
              {merchants.map((eachMerchant) => (
                <button
                  key={eachMerchant.id}
                  className="bg-evaamBackground flex flex-col items-center justify-between rounded-xl p-5 shadow-xl transition-all duration-300 ease-in-out hover:scale-110 md:flex-col"
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
          className="mt-16 animate-pulse rounded-xl bg-evaamCyan p-5 text-green-900 shadow-lg"
          onClick={() => {
            router.push("/shopping-evaam");
          }}
        >
          <p>لیست پذیرندگان</p>
        </button>
      </div>
    </>
  );
}
