"use client"

import { useState } from "react";
import FinishedFacility from "../module/FacilityManagement/finishedFacility";
import MannageFacilityState from "../module/FacilityManagement/MannageFacilityState";
import InprogressFacility from "../module/FacilityManagement/InprogressFacility";
import GivenFacility from "../module/FacilityManagement/GivenFacility";
import RejectedFacility from "../module/FacilityManagement/RejectedFacility";


export default function FacilityManagementPage() {

    const [state, setState] = useState(1)

    return (
        <>
            <MannageFacilityState 
                setSatate={setState}
                state={state}
            />
        <div
            className="
                w-full
                h-full
                p-3
            "
        >
            {
                state == 4 ? (
                    <FinishedFacility />
                ) : state == 2 ? (
                    <InprogressFacility />
                ) : state == 1 ? (
                    <GivenFacility />
                ) : <RejectedFacility />
            }
        </div>
        </>
    )
}