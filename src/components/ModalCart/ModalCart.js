import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'

export default function ModalCart({products, total}) {

    return(
        <div className={`box-cart active`}>
                {products.length === 0 ? (
                    <h2>No hay productos agregados</h2>
                    ) : (
                    <>
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
                    <div className='container-finish-buy'>
                        <p>Total</p>
                        <span>$ {total}</span>
                        <Link to='/cart'>
                            <Button>FINALIZAR COMPRA</Button>
                        </Link>
                    </div>
                    </>
                ) }
               
            </div>
    )    
}