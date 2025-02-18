


export const totalPrice = (products) => {
    const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity , 0).toFixed(2)

    return total
}