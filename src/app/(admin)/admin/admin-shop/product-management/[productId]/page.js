import EditeSingleProductAdminPage from "@/components/template/EditeSingleProductAdminPage"



export default async function EditeSingleProductAdmin({ params }) {

    const { productId } = await params

    return (
        <EditeSingleProductAdminPage
            productId={productId}
        />
    )
}