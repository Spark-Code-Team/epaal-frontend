"use client"

import { useEffect, useState } from "react"
import HandelWallet from "../module/userDashboard/userWallet/HandelWallet"
import PaymentHistoryWallet from "../module/userDashboard/userWallet/PaymentHistoryWallet"
import WalletCard from "../module/userDashboard/userWallet/WalletCard"
import { getWallet } from "@/service/userPanel"



export default function UserWalletTemplate(){

    const [ data, setData ] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await getWallet()

            if(response) {
                console.log(response);
                setData(response.data)
                
            } else {
                console.log(error);
            }
        }
        
        fetchData()
    }, [])

    useEffect(() => {
        console.log(data);
        
    }, [data])

    // bank_deposite
    // bought

    return (
        <>
            <WalletCard
                value={data.wallet_balance} 
            />
            <HandelWallet />
            {
                data.data?.map(item => (
                    <PaymentHistoryWallet 
                        key={item.id}
                        data={item}
                    />
                ))
            }
        </>
    )
}