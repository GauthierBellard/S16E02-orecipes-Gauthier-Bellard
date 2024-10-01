import { IRecipes } from "../../@types"
import {useParams,Navigate } from 'react-router-dom';

interface DetailProps{
  recipes:IRecipes[]
}

const RecipeDetail = ({recipes}:DetailProps) => {
  const { slug } = useParams();

  const result = recipes.find((recipe) => recipe.slug === slug);

  if (result === undefined){
    return <Navigate to="/error"/>
  }
  
  return(
    <div>
      <h1>{result.title}</h1>
    </div>
  )
}

export default RecipeDetail;