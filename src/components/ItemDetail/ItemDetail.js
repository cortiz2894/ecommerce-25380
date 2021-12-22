import './ItemDetail.css'
import { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext';


export default function ItemDetail({ data }) {
    const [quantityItem, setQuantityItem] = useState(0)
    const { addProducts , products} = useContext(CartContext)
    console.log("data item: ", data)
    const [itemCart, setItemCart] = useState(
        {
            name: data.name,
            id: data.id,
            price: data.price,
            image: data.img,
            quantity: 0
        }
    )
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


    const onAdd = (value, name) => {
        itemCart.quantity = value
        console.log(name)
    }

    const sendItem = () => {
        addProducts(itemCart)
        console.log("Productos agregados: ", products)
    }

    return (
        <>
            <Container className="product-item-container">
                <ThemeProvider theme={theme}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={8} className="container-img-detalle">
                                <img src={`../assets/${data.img}`} />
                            </Grid>
                            <Grid item xs={4} >
                                <h2>{data.name} </h2>
                                <p>$ {data.price}</p>
                                <ItemCount stock={data.stock} onAdd={onAdd}/>
                                <Button variant="contained" color="background" onClick={sendItem}>
                                    Comprar
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </Container>
        </>
    )

}