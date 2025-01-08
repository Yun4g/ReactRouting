import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import RecipeList from './Components/recipegenerator'
import ImageGallery from './Components/dynamicImage'

function App() {

  return (
   <div>

    
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='recipeList' element={<RecipeList/>}/>
            <Route path='ImageGallery' element={<ImageGallery/>}/>
            </Route>
        
        </Routes>
   </div>
  )
}

export default App
