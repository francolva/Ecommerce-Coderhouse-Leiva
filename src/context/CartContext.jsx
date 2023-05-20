import { createContext, useState } from "react";

export const CartContext = createContext({
})

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            
        } else {
            console.error('Producto ya agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(product => product.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId)
    }

    const getTotalPrice = () => {
        const totalPrice = cart.reduce((total, product) => 
            total + (product.price * product.quantity), 0)
        return totalPrice;
    }

    const getTotalQuantity = () => {
        const totalQuantity = cart.reduce((total, product) => 
            total + product.quantity, 0)
        console.log(totalQuantity)
        return totalQuantity;
    }

    const getTotalPriceById = (id) => {
        const item = cart.find(product => product.id === id)
        return item.price * item.quantity
    }

    const getQuantityById = (id) => {
        const item = cart.find(product => product.id === id)
        return item.quantity
    }

    const data = {
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalPrice,
        getTotalQuantity,
        getTotalPriceById,
        getQuantityById,
    }

    return (
        <CartContext.Provider value={ data }>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider