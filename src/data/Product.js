import { collection, getDocs, query, where, orderBy } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { DB } from './ApiFirestore';







export const getData = async (categoryId) => {


    let d;

    if (categoryId) {
        d = query(collection(DB, "Productos"), where('categoria', '==', categoryId))
    } else {

        d = query(collection(DB, "Productos"))
    }

    const querySnapshop = await getDocs(d);
    const productosConFormato = querySnapshop.docs.map((rawDoc) => {
        return {
            id: rawDoc.id,
            ...rawDoc.data()
        }
    });

    return productosConFormato;
}



export const getDataId = async (productId) => {

    const docRef = doc(DB, "Productos", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: productId,
            ...docSnap.data()
        }
    } else {
        console.log("no hay data")
    }



}





