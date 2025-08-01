import useFireStore from "../Hooks/useFireStore";


function Gallery() {

  const {docs:images,isLoading} = useFireStore('images');
  // console.log(docs.data());
  if(isLoading)
  {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    )
  }


  return (
    <div className="gap-4 grid md:grid-cols-3 justify-center mt-10 ">

    {images.map((image)=>(
      <div key={image.imageUrl} className="card card-compact bg-base-100 w-full shadow-xl">
  
 <figure className="aspect-[4/3] overflow-hidden">
  <img
    src={image.imageUrl}
    alt="RJ"
    className="w-full h-full object-cover"
  />
</figure>
  <div className="card-body">
   <p>Upload by: {image.userEmail.split('@')[0].slice(0,4).toUpperCase()} </p>
   <span>Created At: {image.createdAt.toLocaleDateString()}</span>
    
  </div>
</div>
    ))}

    </div>
  )
}

export default Gallery