import HandelWallet from "../module/userDashboard/userWallet/HandelWallet"
import PaymentHistoryWallet from "../module/userDashboard/userWallet/PaymentHistoryWallet"
import WalletCard from "../module/userDashboard/userWallet/WalletCard"



export default function UserWalletTemplate(){
    return (
        <>
            <WalletCard />
            <HandelWallet />
            <PaymentHistoryWallet />
        </>
    )
}