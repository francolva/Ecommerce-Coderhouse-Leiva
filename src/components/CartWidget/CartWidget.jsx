import styles from "./CartWidget.module.css"
import cartImage from "../../assets/images/cart-image.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext)
  let totalQuantity = getTotalQuantity()

  return (
    <Link to='/cart' className={ styles.CartWidgetContainer }>
        <img className={ styles.CartWidgetImage } src={cartImage} alt="Carrito" />
        <span className={ styles.CartWidgetQuantity }>{totalQuantity}</span>
    </Link>
  )
}

export default CartWidget