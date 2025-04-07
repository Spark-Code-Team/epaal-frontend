"use client"


export default function ConstantFields() {

    return (
        <div>
            <p
                className="
                    font-bold
                    text-[16px]
                    my-7
                "
            >
                فیلدهای ثابت
            </p>
            <div
                className="
                    grid
                    grid-cols-2
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <p>
                        1
                    </p>
                    <select
                        defaultValue="انتخاب فیلد"
                        className="
                            w-[327px]
                            h-[40px]
                            rounded-xl
                            border
                            border-[#E1EDF0]
                        "
                    >
                        <option>ali</option>
                        <option>ali</option>
                        <option>ali</option>    
                    </select>
                </div>
                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <p>
                        2
                    </p>
                    <input
                        className="
                            w-[327px]
                            h-[40px]
                            rounded-xl
                            border
                            border-[#E1EDF0]
                        "
                        type="text"
                        placeholder="نام فیلد"
                    >
                        
                    </input>
                </div>
            </div>
        </div>
    )
}