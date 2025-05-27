import CreateSellerPage from "@/components/template/CreateSellerPage";



export default async function ConfirmRequest({ params }) {
    

    return (
        <CreateSellerPage 
            requestId={ await params.requestId } 
        />
    )
}