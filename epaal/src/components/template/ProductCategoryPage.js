import ProductCard from "../elements/productCard";



export default function ProductCategoryPage({ data, shopCategory }) {

    return  (
        <>
            <div
                className="
                    w-full
                    my-8
                    p-2
                    bg-[#d9d9d9]
                "
            >
                دسته بندی {shopCategory}
            </div>

            <div
                className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                "
            >
                {
                    data.map(item => (
                        <ProductCard 
                            variant="new"
                            key={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            href={`/shopping-evaam/products/${item.id}`}
                        />
                    ))
                }
            </div>
        </>
    )
}