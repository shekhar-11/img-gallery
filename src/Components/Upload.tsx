

const Upload = () => {
  return (
    <div className="text-center mt-10 gap-5" >

    <form   className="flex flex-col items-center gap-3">
        <input type="file" 
        className="file-input file-input-ghost text-center" 
        />

        <button className="btn gap-5">Upload <span>🪄</span></button>


    </form>
    </div>
  )
}

export default Upload