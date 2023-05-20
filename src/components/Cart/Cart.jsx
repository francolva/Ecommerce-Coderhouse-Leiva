import styles from "./Cart.module.css"
import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { 
        cart,
        clearCart,
        totalQuantity,
        getTotalPrice,
    } = useContext(CartContext)
    let totalPrice = getTotalPrice()
    

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className={ styles.CartContainer }>
            { cart.map(product => <CartItem key={product.id} {...product}/>) }
            <h3 className={ styles.CartPrice }>Total: ${totalPrice}</h3>
            <button onClick={() => clearCart()} className={ styles.CartButton }>Limpiar carrito</button>
            <Link to='/checkout' className={ styles.CartLinks }>Realizar compra</Link>
        </div>
    )
}

export default Cart;