import FacilityState from "../elements/FacilityState"
import CreditFinalWaitingModule from "../module/userDashboard/final-waiting/page"

export default function CreditFinalWaitingTemplate(){
    return (
        <>
            <FacilityState
                curentState={8}
            />
            <CreditFinalWaitingModule/>
        </>
    )
}