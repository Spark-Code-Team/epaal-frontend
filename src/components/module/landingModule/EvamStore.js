import BlurTitle from "@/components/elements/BlurTitle";
import Stors from "@/components/elements/Stors";



export default function EvamStore() {

    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                w-full
            "
        >
            <BlurTitle 
                title="قابل استفاده در فروشگاه های ایوام"
            />

            <Stors  />
        </div>
    )
}