import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};
/*
export const products = [
  {title:'Male-Singles',category:'M', price: 25, pictureUrl: 'data:image/jpeg;base64,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'},
  {title:'Male-Doubles',category:'M', price: 35, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg4puW-Ta94ezI7cui69kfPyIxyjGE2KhIov8sUCF547icn7CQU8l8ujWRtMxtUe5kD0&usqp=CAU'},
  {title:'Female-Singles',category:'F', price: 25, pictureUrl: 'data:image/jpeg;base64,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'},
  {title:'Female-Doubles',category:'F', price: 35, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-fbT3UX87MHiGpwDhpxcUBil4fKLgUgbPQ&usqp=CAU'}, 
  {title:'Mix-Doubles',category:'M', price: 35, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXEIEcAG09Y8ThWl8qo9Zj6nBWkjVo-6jEQ&usqp=CAU'},
  
]
*/
/*
export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
}
*/


