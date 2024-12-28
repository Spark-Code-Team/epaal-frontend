import Layout from "@/components/layout/HomeLayout/Layout";



export default function LandingLayout({ children }) {

    return (
        <>
            <Layout>
                { children }
            </Layout>
        </>
    )
}