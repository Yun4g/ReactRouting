import { useNavigate } from "react-router-dom"





function Header() {
    const navigate =  useNavigate()

     const goToImagePage = ()=>{
          navigate('/ImageGallery')
     }

     const goToRecipePage = ()=>{
      navigate('/recipeList')
     }

       return(
           <header className=" w-full border h-24 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 ">
              <button onClick={goToImagePage} className=" p-2 text-white rounded-md  bg-slate-500">Go to USERS Page</button>
              <button onClick={goToRecipePage} className=" p-2 text-white rounded-md bg-slate-500">Go to recipe Page</button>
           </header>
       )
}

export default Header