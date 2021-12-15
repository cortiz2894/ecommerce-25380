import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


export default function ContainerItemDetail() {
    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    const dataProducts = [{
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

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 1000)
    })

    useEffect(() => {
        getProduct.then(resultsProducts => {
            resultsProducts.filter(resultProduct => {
                if (resultProduct.id === parseInt(id)) {
                    setProduct(resultProduct)
                    setLoader(false)
                }
            })
        })
    }, [id])

    return (
        <div>
            {loader ?
                <CircularProgress />
                    :
                <ItemDetail data={product} />
            }
        </div>
    )

}