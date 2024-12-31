import LayoutAdmin from "@/components/layout/AdminLayout/LayoutAdmin";



export default function AdminLayout({ children }) {


    return (
        <LayoutAdmin>
            { children }
        </LayoutAdmin>
    )
}