import { useState } from "react";
import useStorage from "../Hooks/useStorage";


const Upload = () => {

  const [selectedFile,setSelectedFile] = useState<File|null>(null);
  const {startUpload} = useStorage();

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    if(e.target.files  && e.target.files[0]){
      setSelectedFile(e.target.files[0]);
    }
  }

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(selectedFile)
    {
      startUpload(selectedFile);
    }
    setSelectedFile(null);
  }

  return (
    <div className="text-center mt-10 gap-5" >

    <form onSubmit={handleSubmit}  className="flex flex-col items-center gap-3">
        <input type="file" 
        className="file-input file-input-ghost text-center" 
        onChange={handleFileChange}
        />

        <button type='submit' className="btn gap-5">Upload <span>🪄</span></button>


    </form>
    </div>
  )
}

export default Upload