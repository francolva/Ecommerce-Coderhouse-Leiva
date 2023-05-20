import { useState } from "react"
import styles from "./CheckoutForm.module.css"


const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    console.log('b')
    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className={ styles.CheckoutFormContainer }>
            <form onSubmit={handleConfirm} className={ styles.CheckoutForm}>
                <label className={ styles.CheckoutFormLabel }>
                    Nombre
                </label>
                <input className={ styles.CheckoutFormInput }
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)} />
                <label className={ styles.CheckoutFormLabel }>
                    Teléfono
                </label>
                <input className={ styles.CheckoutFormInput } 
                    type="text"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)} />
                <label className={ styles.CheckoutFormLabel }>
                    Email
                </label>
                <input className={ styles.CheckoutFormInput }
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)} />
                <div className="">
                    <button className={ styles.CheckoutFormButton } type="submit">
                        Generar orden
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;