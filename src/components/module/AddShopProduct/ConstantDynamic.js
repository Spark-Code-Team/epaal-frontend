import CheckDefaultCategory from "../../../../public/icons/Admin/CheckDefaultCategory"
import CheckTrueCategory from "../../../../public/icons/Admin/CheckTrueCategory"



export default function ConstantDynamic () {

    const test = Array.from({length: 20}, (v, i) => i)

    // console.log(test);
    
    
    return (
        <div
            className="
                mt-[35px]
                h-64
                overflow-y-scroll
            "
        >
            {
                test.map((item, index) => (
                    <div
                        key={index}
                        className="
                            w-[80%]
                            flex
                            justify-around
                            mx-auto
                            mb-4
                        "
                    >
                        <div
                            className="
                                w-1/2
                            "
                        >
                            <p>نام فیلد</p>
                        </div>
                        <div
                            className="
                                flex
                                justify-between
                                w-1/2
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <CheckTrueCategory />
                                ثابت
                            </div>
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >
                                <CheckDefaultCategory />
                                متغیر
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}