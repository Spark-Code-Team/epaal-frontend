"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function Signature(props) {
  const {from} = props

  const sigCanvasRef = useRef(null);
  const [signatureData, setSignatureData] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 600,
    height: 350,
  });

  const router = useRouter()

  // تنظیم ابعاد canvas به صورت ریسپانسیو
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCanvasDimensions({ width: 280, height: 340 });
      } else {
        setCanvasDimensions({ width: 600, height: 350 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // تابع پاک کردن امضا (هم بوم و stateها)
  const clearSignature = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
    }
    setSignatureData("");
    setUploadMessage("");
    setShowPreview(false);
  };

  // ذخیره امضا هنگام پایان لمس/حرکت
  const handleEnd = () => {
    if (sigCanvasRef.current) {
      const dataURL = sigCanvasRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      // امضای خالی پیش‌فرض
      const emptyData =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QM7/d0AAAAASUVORK5CYII=";
      if (dataURL && dataURL !== emptyData) {
        setSignatureData(dataURL);
        console.log("Signature Data URL:", dataURL);
      } else {
        setSignatureData("");
      }
    }
  };

  // ارسال امضا به سرور (در اینجا فقط شبیه‌سازی شده)
  const uploadSignature = async () => {
    if (signatureData) {
      setIsUploading(true);

      // شبیه‌سازی ارسال با تاخیر 1 ثانیه
      setTimeout(() => {
        setIsUploading(false);

        // نمایش modal پیش‌نمایش
        setShowPreview(true);
      }, 1000);

      
    }
  };


  function confirmSignature (){
    if (from == "dashboard") {
      router.push("/dashboard/confirm-prepayment")
    }
  }

  // تابعی برای بازنشانی کامل stateها (ویرایش امضا)
  const resetSignature = () => {
    clearSignature();
    // در صورت نیاز، بوم امضا را نیز ریست می‌کنیم:
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
    }
  };

  return (
    <div className="flex flex-col mt-10 w-full">
        <div className="font-extrabold text-lg mb-5">
            <p>
                نمونه امضا
            </p>
        </div>
        <div className="font-medium text-lg mb-5 mt-5">
            <p>
                لطفا نمونه امضا خود را در کادر زیر وارد کنید: 
            </p>
        </div>
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-lg border p-4">
        
        <div className="flex w-full items-center justify-between">
          <p className="font-bold">محل امضا:</p>
          <div
            className="rounded-md bg-gray-400 p-1 hover:cursor-pointer"
            onClick={clearSignature}
          >
            <TrashIcon width={24} height={24} />
          </div>
        </div>
        <SignatureCanvas
          penColor="black"
          canvasProps={{
            width: canvasDimensions.width,
            height: canvasDimensions.height,
            className: "rounded-2xl ",
          }}
          ref={sigCanvasRef}
          onEnd={handleEnd}
        />
        {isUploading && (
          <div className="flex w-full items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-white border-t-transparent" />
          </div>
        )}
        {uploadMessage && (
          <p className="text-center font-bold text-green-600">
            {uploadMessage}
          </p>
        )}
      </div>
      {/* دکمه تایید؛ فعال فقط در صورت وجود امضا */}
      <div
        onClick={() => {
          if (signatureData) {
            uploadSignature();
          }
        }}
        className={`mt-5 rounded-lg py-2 text-center mb-10 ${
          signatureData
            ? "bg-evaamGreen hover:cursor-pointer"
            : "bg-gray-300 hover:cursor-default"
        } text-white`}
      >
        تایید و پیش‌پرداخت
      </div>

      {/* Modal پیش‌نمایش امضا (با position fixed) */}
      {showPreview && signatureData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-auto max-w-md rounded-lg bg-white px-7 py-4 md:w-96">
            <p className="mb-2 text-center font-bold">پیش‌نمایش امضا</p>
            <div className="">
              <img
                src={signatureData}
                alt="Signature preview"
                className="mx-auto h-64 w-full rounded-lg border p-3 md:h-auto md:p-4"
              />
            </div>
            <div className="mt-4 flex justify-around gap-2">
              <button
                onClick={resetSignature}
                className="rounded bg-gray-300 px-4 py-2 text-black"
              >
                ویرایش
              </button>
              <button
                onClick={confirmSignature}
                className="rounded bg-evaamGreen px-4 py-2 text-white"
              >
                تایید نهایی
              </button>
            </div>
            {isUploading && (
              <div className="mt-4 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-white border-t-transparent" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
