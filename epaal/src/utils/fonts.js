import localFont from "next/font/local"



export const sparkCodeFont = localFont({
    src: [
        {
            path: "../../public/fonts/Dana-Thin.woff2",
            style: "normal",
            weight: "100"
        },
        {
            path: "../../public/fonts/Dana-Light.woff2",
            style: "normal",
            weight: "300"
        },
        {
            path: "../../public/fonts/Dana-Regular.woff2",
            style: "normal",
            weight: "400"
        },
        {
            path: "../../public/fonts/Dana-Medium.woff2",
            style: "normal",
            weight: "500"
        },
        {
            path: "../../public/fonts/Dana-SemiBold.woff2",
            style: "normal",
            weight: "600"
        },
        {
            path: "../../public/fonts/Dana-Bold.woff2",
            style: "normal",
            weight: "700"
        },
        {
            path: "../../public/fonts/Dana-ExtraBold.woff2",
            style: "normal",
            weight: "800"
        },
    ]
})