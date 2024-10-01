import { useCallback, useEffect, useState } from 'react'
import Menu from '../Menu/Menu'
import Header from '../header/Header'
import Post from '../Post/Post'
import './App.scss'
import { IRecipes } from '../../@types'
import { Route, Routes } from 'react-router-dom';
import RecipeDetail from '../RecipeDetail/RecipeDetail'

function App() {
 

  const [recipes , setRecipes] = useState<IRecipes[]>([]);

  const getRecipes = useCallback( async () => {
    try {
      const response = await fetch ('http://localhost:3000/api/recipes')

      const allRecipes = await response.json();

      console.log(allRecipes);
      
      
      setRecipes(allRecipes);

  
    } catch (error) {
    console.log('catch/error', error);
    
  }
  },[]);


  


  useEffect(()=>{
    getRecipes();    
  },[getRecipes]
  );

  console.log(recipes);
  
  return (
    <>
      <div className='container'>
      <Menu recipes={recipes}/>
        <div className='content-container'>
          <Header />
          <Post theRecipes ={recipes} />
        </div>
        
      </div>
      
    </>
  )
}

export default App;
