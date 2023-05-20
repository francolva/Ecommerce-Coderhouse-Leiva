import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = ({ greeting }) => {
	const [product, setProduct] = useState(null)
	const { itemId } = useParams()

	useEffect(() => {
		const collectionRef = itemId
			? query(collection(db, 'products'), where('id', '==', itemId))
			: null
		
		getDocs(collectionRef)
			.then (response => {
				response.docs.map(doc => {
					const productsAdapted = doc.data()
					setProduct(productsAdapted)
				})
				
			})
			.catch(error => {
				console.log(error)
			})
	}, [itemId])

    return (
        <>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer;