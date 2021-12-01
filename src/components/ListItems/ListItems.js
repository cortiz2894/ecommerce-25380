import React, { useEffect, useState } from 'react'
import './ListItems.css'
import Item from '../Item/Item'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const ListItems = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const dataProducts = [
        {
            id: 1,
            name: 'Remera 1',
            price: 1400,
            stock: 10,
            img: 'remera1.jpg'
        },
        {
            id: 2,
            name: 'Remera 2',
            price: 1500,
            stock: 20,
            img: 'remera2.jpeg',
            description: "asdasdsadsad"
        },
        {
            id: 3,
            name: 'Remera 3',
            price: 1700,
            stock: 10,
            img: 'remera3.jpg'
        },
        {
            id: 4,
            name: 'Remera 4',
            price: 1200,
            stock: 25,
            img: 'remera4.jpg'
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((data) => {
            console.log("respuesta de promesa:", data)
            setProducts(data)
            //Ocultar loader
            setLoader(false)
        })
    }, [])

    return (
        //Update
        <>
            <h2>Productos Destacados</h2>
            <Container className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <Grid container spacing={2}>
                            {products.map(product => {
                                return (
                                    <Grid item xs={3} key={product.id}>
                                        <Item data={product} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                }
            </Container>
        </>
    )
}

export default ListItems