import Item from '../Item/Item'
import Button from '../Button/Button'
import AddIcon from '@mui/icons-material/Add';

const ListItems = () => {
    const dataProducts = [
        {
            name: 'Remera 1',
            price: 1400,
            stock: 10,
            img: 'remera.jpg'
        },
        {
            name: 'Remera 2',
            price: 1500,
            stock: 20,
            img: 'remera2.jpg'
        }
    ]

    return(
        <>
            <h2>Productos Destacados</h2>
        </>
    )
}

export default ListItems