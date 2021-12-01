import React, { useState } from 'react'
import './Item.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

//Terminar logica de ThemeProvider
const theme = createTheme({
    palette: {
        base: {
            // Color oscuro para textos.
            main: '#070802',
        },
        background: {
            // Color amarillo para fondos.
            main: '#e9ff41',
        },
    },
});

export default function Item({ data }) {

    const [itemCount, setItemCout] = useState(0)

    const updateItem = () => {
        itemCount < data.stock && setItemCout(itemCount + 1)
    }

    const removeItem = () => {
        itemCount > 0 && setItemCout(itemCount - 1)
    }

    // console.log("nueva prop: ", data)
    // const {name, stock} = data

    return (
        <div className="card-item-product">
            <ThemeProvider theme={theme}>
                <span className="stock-text">Stock : {data.stock}</span>
                <div className="item-image">
                    <img src={`../../assets/${data.img}`} alt="product image" />
                </div>
                <div className="item-info">
                    <h2>{data.name}</h2>
                    <div className="item-count">
                        <div className="item-count__info">
                            <span>Cantidad: </span>
                        </div>
                        <div className="item-count__buttons">
                            <Button variant="outlined" color="base" onClick={removeItem}>-</Button>
                            <p>{itemCount}</p>
                            <Button variant="outlined" color="base" onClick={updateItem} >+</Button>
                        </div>
                    </div>
                    <Button variant="contained" color="background">Agregar al carrito</Button>

                </div>
            </ThemeProvider>
        </div>

    )
}

