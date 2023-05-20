import { Link } from "react-router-dom";
import styles from "./Item.module.css"

const Item = ({ id, name, price, img, stock }) => {

    return (
        <div className={ styles.ItemContainer }>
            <header className={ styles.ItemTitleContainer }>
                <h3 className={ styles.ItemTitle }>
                    { name }
                </h3>
            </header>
            <picture className={ styles.ItemImageContainer }>
                <img className={ styles.ItemImg } src={ img } alt= { name }  />
            </picture>
            <section className={ styles.ItemContentContainer }>
                <p className={ styles.ItemPrice }>
                    ${ price }
                </p>
                <p className={ styles.ItemStock }>
                    En stock: { stock }
                </p>
            </section>
            <footer className={ styles.ItemContentContainer }>
                <Link className={ styles.ItemLinks} to={ `/item/${id}` }>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default Item;