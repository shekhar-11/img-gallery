import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import  { useEffect, useState } from 'react'
import { db } from "../firebase/fbconfig";


type Image = {
    createdAt:Date;
    userEmail:string;
    imageUrl:string;
}
const useFireStore = (collectionName:string) => {

const [docs,setDocs] = useState<Image[]>([]);
const [isLoading,setLoading] = useState<boolean>(true);

useEffect(() => {



    let unsubscribe: ()=> void
const getData = async()=>{
    try{


const q = query(collection(db, collectionName),orderBy('createdAt', 'desc'));
         unsubscribe = onSnapshot(q, (querySnapshot) => {
    const images:Image[] = [];
    querySnapshot.forEach((doc) => {
        //   images.push(doc.data());
          const imageUrl = doc.data().imageUrl;
          const createdAt = doc.data().createdAt.toDate();
          const userEmail = doc.data().user;
          images.push({ imageUrl, createdAt, userEmail });
    });
    setDocs(images);
    setLoading(false);
   
    });
    }
    catch(error){
        console.error("Error fetching data from Firestore:", error);
        setLoading(false);
    }
}
    getData();


    return  ()=>  unsubscribe && unsubscribe()
},[collectionName])
  return {
    docs,
    isLoading,
  }
}

export default useFireStore