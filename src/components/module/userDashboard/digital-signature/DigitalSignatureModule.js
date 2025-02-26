import FacilityState from "@/components/elements/FacilityState"
import Signature from "@/components/elements/Signature"

export default function DigitalSignatureModule(){
    return (
        <>
            <div>
            <FacilityState 
                curentState={6}
            />
                <Signature from="dashboard"/>
            </div>
        </>
    )
}