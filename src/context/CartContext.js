import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("productos")) || [])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProducts = (product) => {
        setProducts([...products, product])
        addProductStorage(product)
        setTotalPrice(totalPrice + product.price * product.quantity)
    }

    const addProductStorage = (product) => {
        localStorage.setItem("productos", JSON.stringify([...products, product]))
    }

    const data = {
        products,
        addProducts,
        totalPrice
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext