import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react'
import { db, storage } from '../firebase/fbconfig';
import { useAuth } from './useAuth';
import { addDoc, collection } from 'firebase/firestore';

const useStorage = () => {
  const [progress,setProgress] = useState<number>(0);
  const [error,setError] = useState<Error|null>(null);

  // const [url,setUrl] = useState<string|null>(null);

  const {user} = useAuth();

    const startUpload= (file:File)=>{
        if(!file) return;
        const today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    
    
    const formattedDate = dd + mm;
    const userName = user?.email?.split('@')[0] || formattedDate ;
        const fileName = `${userName}/${formattedDate}-${file.name}`;
        const storageRef = ref(storage,fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setProgress(progress);
   
        }, 
        (error) => {
          // Handle unsuccessful uploads
          setError(error);
        }, 
        async () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
         const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            // console.log('File available at', downloadURL);
            // setUrl(downloadURL);
            setProgress(progress); // Reset progress after upload

          
          await addDoc(collection(db, 'images'), {
            imageUrl: downloadURL,
            createdAt: new Date(),
            user: user?.email,
        });
    });
          }

  return {
    progress,error,startUpload
  }
}

export default useStorage