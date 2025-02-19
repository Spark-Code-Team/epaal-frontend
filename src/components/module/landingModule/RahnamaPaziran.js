import FlashButton from "@/components/elements/FlashButton";
import Rahnama from "../../../../public/icons/Rahnama";
import RahnamaDesktop from "../../../../public/icons/RahnamaDesktop";
import BlurTitle from "@/components/elements/BlurTitle";

export default function RahnamaPaziran() {
  return (
    <div className="mb-12 flex flex-col items-center justify-center bg-white pt-[38px] md:bg-[#E1EDF0]">
      <p className="mb-[38px] hidden text-[18px] font-bold md:flex">
        فروشنده شوید
      </p>
      <div className="mb-10 md:hidden">
        <BlurTitle title="فروشنده شوید" />
      </div>
      <div className="flex w-full items-center justify-center md:hidden">
        <Rahnama />
      </div>
      <div className="hidden w-full items-center justify-center md:flex">
        <RahnamaDesktop />
      </div>
      <div className="flex w-full items-center justify-center">
        <FlashButton title="فرم درخواست" href="" them="landing" />
      </div>
    </div>
  );
}
