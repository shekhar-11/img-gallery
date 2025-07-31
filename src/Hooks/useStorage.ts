import { ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { storage } from '../firebase/fbconfig';

const useStorage = () => {
  const [progress,setProgress] = useState<number>(0);
  const [error,setError] = useState<Error|null>(null);

  const [url,setUrl] = useState<string|null>(null);



    const startUpload= (file:File)=>{
        if(!file) return;
        const today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    

    const formattedDate = dd + mm;
        const fileName = `images/${formattedDate}-${file.name}`;
        const storageRef = ref(storage,fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);
    }

  return {
    progress,error,url,startUpload
  }
}

export default useStorage