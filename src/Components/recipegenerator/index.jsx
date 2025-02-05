import useFetch from "../useFetch/useFetch";
import { Link } from 'react-router-dom';



function RecipeList() {

   const {data, loading} = useFetch('https://dummyjson.com/recipes');
   console.log(data)

         return (
            <div className="border">
                 <h1 className=" my-7 text-2xl font-bold text-orange-600  font-serif">Best Recipe 2027</h1>
                 {
                    !loading ?
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 w-10/11">
                      {
                        data?.recipes.map((recipe)=>(
                           <div className="flex flex-col  text-ellipsis justify-center  rounded-xl shadow-2xl  md:h-[24rem] bg-white" key={recipe.id}>
                              <div className=" overflow-hidden  rounded-s-xl  h-1/2  md:h-full border md:w-full">
                                 <img src={recipe.image} className=" w-full h-full" alt="" />
                              </div>
                              <div className=" flex flex-col text-start text-ellipsis  overflow-hidden   p-2 items-center h-1/2 md:h-[94%]  md:w-full">
                              <h3 className=" mt-3 md:text-lg lg:text-2xl text-red-900 font-bold">{recipe.name}</h3>

                              <button className="bg-red-900 text-white mt-3 h-11 rounded-xl cursor-pointer  w-36"> <Link to={`/recipeList/${recipe.id}`}>see more</Link></button>

                              
                              </div>
                         
                           </div>                        
                        ))
                      }
                    </div>
                      :   <h2>loading...</h2>
                 }
            </div>
         )
}

export default RecipeList