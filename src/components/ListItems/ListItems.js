import React, { useEffect, useState } from 'react'
import './ListItems.css'
import Item from '../Item/Item'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom'

const ListItems = ({title}) => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const {category} = useParams()


    const dataProducts = [
        {
            id: 1,
            name: 'Remera 1',
            price: 1400,
            stock: 10,
            img: 'remera1.jpg',
            category: 'remeras'
        },
        {
            id: 2,
            name: 'Remera 2',
            price: 1500,
            stock: 20,
            img: 'remera2.jpeg',
            description: "asdasdsadsad",
            category: 'remeras'
        },
        {
            id: 3,
            name: 'Pantalon 1',
            price: 1700,
            stock: 10,
            img: 'remera3.jpg',
            category: 'pantalones'
        },
        {
            id: 4,
            name: 'Pantalon 2',
            price: 1200,
            stock: 25,
            img: 'remera4.jpg',
            category: 'pantalones'
        }
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((resultsProducts) => {
            if(category) {
                resultsProducts.filter(resultProduct => {
                    if (resultProduct.category === category) {
                        setProducts(products => [...products, resultProduct])
                        setLoader(false)
                    }
                })
            }
            else{
                setProducts(resultsProducts)
                setLoader(false)
            }
        })
    }, [])

    return (
        <>
            <h2>{category ? category : title}</h2>
            <Container className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <Grid container spacing={2}>
                            {console.log("products render: ",products)}
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