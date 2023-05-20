import styles from './CartItem.module.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, img }) => {
    const {
        getTotalPriceById,
        getQuantityById,
    } = useContext(CartContext)

    const totalPriceById = getTotalPriceById(id)
    const quantity = getQuantityById(id)

    return (
        <div className={ styles.CartItemContainer }>
            <header className={ styles.CartItemTitleContainer }>
                <h3 className={ styles.CartItemTitle }>
                    { name }
                </h3>
            </header>
            <picture>
                <img src={ img } alt="" />
            </picture>
            <p className={ styles.CartItemQuantity }>
                Cantidad:{ quantity }
            </p>
            <p className={ styles.CartItemPrice }>
                ${ totalPriceById }
            </p>
            <footer className={ styles.CarrtItemContentContainer }>
                <Link className={ styles.CartItemLinks } to={ `/item/${id}` }>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default CartItem;