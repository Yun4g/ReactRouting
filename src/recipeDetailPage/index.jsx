import { useParams } from "react-router-dom"
import UseFetch from "../Components/useFetch/useFetch"

function RecipeDetailPage() {
   const {id} = useParams()
   const { data: foodData } =  UseFetch(`https://dummyjson.com/recipes/${id}`); 

    return(
        <div className="flex justify-center items-center h-screen border">
          {
            foodData ? (
                 <section key={foodData.id} className=" border-2  w-96 rounded-2xl bg-red-900    p-3">
                     <h1 className=" text-2xl font-bold text-orange-200">{foodData.name}</h1>

                     <h3 className=" text-xl  font-bold m-4 text-orange-200">INGREDIENTS</h3>
                     <ol className="flex flex-col items-start">
                         {
                            foodData.ingredients.map((ingredient, index)=>(
                                  <li key={index} className=" font-mono font-bold text-slate-50">{ingredient}</li>
                            ))
                         }
                     </ol>
                 </section>
            ) : (
                <h2>foodData not found</h2>
            ) 
          }
        </div>
    )
}


export default RecipeDetailPage