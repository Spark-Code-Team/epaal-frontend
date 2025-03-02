"use client"

import { useEffect, useState } from "react";
import MannageFacilityState from "../module/FacilityManagement/MannageFacilityState";
import InprogressFacility from "../module/FacilityManagement/InprogressFacility";
import GivenFacility from "../module/FacilityManagement/GivenFacility";
import RejectedFacility from "../module/FacilityManagement/RejectedFacility";
import FacilityFinished from "../module/FacilityManagement/FacilityFinished";
import { facilityInformation } from "@/service/userPanel";


export default function FacilityManagementPage() {

    const [facility, setFacility] = useState({
        canceled: null,
        in_progress: null,
        installment: null,
        done: null
    })

    const [state, setState] = useState(1)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true)
            const { response, error } = await facilityInformation()

            if(response) {
                setFacility({
                    canceled: response.data.canceled,
                    in_progress: response.data.in_progress,
                    installment: response.data.installment,
                    done: response.data.done
                })
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    useEffect(() => {
        console.log(facility);
    }, [facility])

    if(loading) {
        return <h1>Loading</h1>
    }


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
                    <FacilityFinished 
                        facility={facility.done}
                    />
                ) : state == 2 ? (
                    <InprogressFacility 
                        facility={facility.in_progress}
                    />
                ) : state == 1 ? (
                    <GivenFacility 
                        
                    />
                ) : <RejectedFacility 
                    facility={facility.canceled}
                />
            }
        </div>
        </>
    )
}