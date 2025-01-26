import Image from "next/image";



export default function ProductImage ({ image }) {

    return (
        <div>
            <Image
                src={image}
                alt="alt"
                width={250}
                height={250}
                className="
                    w-[250px]
                    h-[250px]
                    shadow-lg
                    rounded-lg
                "
            />
        </div>
    )
}