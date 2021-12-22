import React, {useState, useEffect, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const [showCart, setShowCart ] = useState(false)
    useEffect(() => {
        //console.log("products cartWidget" , products)
    })
    const {products} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    console.log("products desde agregados al carrito: ",products)

    return(
        <div className="cart-container">
            <ShoppingCartIcon style={{fill: "black"}} onClick={openCart}/>
            <div className={`box-cart ${showCart && 'active'}`}>
                {products.map((product) => {
                    return(
                        <div className='item-cart-list' key={product.id}>
                            <div className='item-cart-img'>
                                <img  src={`../assets/${product.image}`} />
                            </div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <span>Cant: {product.quantity}</span>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default CartWidget