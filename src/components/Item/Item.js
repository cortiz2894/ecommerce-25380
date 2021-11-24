const Item = ({name, price, stock, img}) => {

    return(
        <div>
            <p>Nombre : {name}</p>
            <p>Precio : {price}</p>
            <p>Stock: {stock}</p>
            <img src={`/assets/product/${img}`} />
        </div>
    )
}
export default Item;