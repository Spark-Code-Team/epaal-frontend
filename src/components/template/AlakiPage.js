"use client"


import { useState } from "react";
import AdditionalInformation from "../module/bank-credit/AdditionalInformation";
import SelectedTarhInformation from "../module/auth/SelectedTarhInformation";



export default function AlakiPage () {

    const [state, setState] = useState(1)

    return (
        <>
            {
                state == 1 ? (
                    <AdditionalInformation 
                        setState={setState}
                    />
                ) : (
                    <SelectedTarhInformation setState={setState} />
                )
            }
        </>
    )
}