import { Typography } from "@mui/material"
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ( { greeting, products } ) => {
  
  return (
    <div>
        <Typography fontSize={32} variant="h3">{ greeting }</Typography>
        <div className= { styles.ItemListContainer } >
          {products?.map(product => <Item key={product.id} {...product} />)}
        </div>
    </div>
  )
}

export default ItemList;