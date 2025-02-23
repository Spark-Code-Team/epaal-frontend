import Image from "next/image";

import BikeSend from "@/../public/icons/dashboard/bike-clues.svg";

export default function SendCluesModule() {
  return (
    <>
      <div id="container" className="w-full h-auto">
        <div className="my-4 text-lg font-extrabold">
          <p>ارسال چک صیادی</p>
        </div>
        <div
          id="information-box-container"
          className="flex h-auto w-full flex-col items-start justify-evenly gap-2 rounded-lg border-2 border-gray-200 p-4"
        >
          <div>
            <p>
              لطفا موارد ذیل را به نشانی{" "}
              <span className="font-bold">
                استان تهران، خیابان پاسداران، بوستان پنجم، پلاک 84
              </span>
            </p>
          </div>
          <div>
            <p>و کدپستی: ********</p>
          </div>
          <div>
            <p>ارسال نمائید و منتظر اعلام نتیجه، بمانید.</p>
          </div>
          <div className="my-4 font-bold">
            <p>
              - <span> چک صیادی</span>
            </p>
          </div>
        </div>
        <div>
          <Image
            src={BikeSend}
            alt="send-bike"
            width={400}
            height={400}
            className="mb-5"
          />
        </div>
        <div className="mb-10 w-4/5 mx-auto rounded-lg bg-gray-200 px-5 py-2 text-center font-semibold text-gray-400">
          <p>در انتظار پنل ادمین</p>
        </div>
      </div>
    </>
  );
}
