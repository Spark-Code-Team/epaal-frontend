


export default function IntroAddProduct({ setModalState, modalState, setShowModal, canGo }) {
    

    return (
        <div
            className={`
                w-full
                border-t
                flex
                ${modalState == 1 ? "justify-end" : "justify-between"}
                py-3
                px-[53px]
            `}
        >
            <div
                className={`
                    p-[10px]
                    border
                    rounded-xl
                    border-[#054366]
                    cursor-pointer
                    ${modalState == 1 ? "hidden" : ""}
                `}
                onClick={() => setModalState(last => last - 1)}
            >
                بازگشت به محرله قبلی
            </div>
            <div
                className={`
                    w-fit
                    p-[10px]
                    text-white
                    rounded-xl
                    ${canGo ? "bg-[#1d434c]" : "bg-[#e1e6ef]"}
                    cursor-pointer
                    transition-all
                `}
                onClick={() => {
                    if(modalState == 4 && canGo) {
                        setShowModal(false)
                        setModalState(1)
                    } else {
                        canGo && setModalState(last => last + 1)
                    }
                }}
            >
                ادامه
            </div>
        </div>
    )
}