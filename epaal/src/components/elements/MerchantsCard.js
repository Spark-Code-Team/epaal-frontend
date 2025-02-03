import Image from "next/image";

export default function MerchantsCard({ merchants }) {
  return (
    <>
      <div className="flex items-center lg:flex-col">
        <div>
          <p>فروشگاه های ایوام</p>
        </div>
        <div className="flex lg:flex-row lg:w-full lg:justify-evenly">
          {merchants && merchants.length != 0 ? (
            <>
              {merchants.map((eachMerchant) => (
                <div key={eachMerchant.id} className="bg-green-400 rounded-xl p-5 flex lg:flex-col lg:items-center lg:justify-between">
                  <p>{eachMerchant.merchantName}</p>
                  <Image
                    src={eachMerchant.merchantLogo}
                    height={100}
                    width={100}
                    alt="merchant logo"
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              <p>هیچ فروشگاهی نیست</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
