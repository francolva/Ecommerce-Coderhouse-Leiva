import styles from "./ItemDetail.module.css"
import ItemCounter from "../ItemCount/ItemCounter";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img
        }
        addItem(item, quantity)
    }
    
    return (
        <div className={ styles.ItemDetailContainer }>
            <header className={ styles.ItemDetailTitleContainer }>
                <h3 className= { styles.ItemDetailTitle }>
                    { name }
                </h3>
            </header>
            <picture className={ styles.ItemDetailImageContainer }>
                <img className={ styles.ItemDetailImg } src={ img } alt= { name }  />
            </picture>
            <section className={ styles.ItemDetailContentContainer }>
                <p className={ styles.ItemDetailDescription }>
                    { description }
                </p>
            <section className={ styles.ItemDetailPriceContainer }>
                <p className={ styles.ItemDetailPrice }>
                    ${ price }
                </p>
            </section>
                <p className={ styles.ItemDetailStock }>
                    En stock: { stock }
                </p>
            </section>
            <footer className={ styles.ItemDetailCounterContainer }>
                {
                    quantityAdded > 0 ? (
                        <div className={ styles.ItemDetailAddedToCart }>
                            <Link to='/cart' className={ styles.ItemDetailLinks }>Ver carrito</Link>
                            <Link to='/' className={ styles.ItemDetailLinks }>Seguir navegando</Link>
                        </div>
                    ) : (
                        <ItemCounter initial={0} stock={ stock } addToCart={ handleOnAdd }/>
                    )
                }
                
            </footer>
        </div>
    )
}

export default ItemDetail;