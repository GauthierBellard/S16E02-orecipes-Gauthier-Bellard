import { IRecipes } from "../../@types"
import {useParams,Navigate } from 'react-router-dom';

interface DetailProps{
  recipes:IRecipes[],
}

const RecipeDetail = ({recipes}:DetailProps) => {
  const { slug } = useParams();

  const result = recipes.find((recipe) => recipe.slug === slug);

  if (result === undefined){
    return <Navigate to="/error"/>
  }
  
  return(
    <div className="recipe">
      <header className="presentation">
        <img src={result.thumbnail} alt="" className="presentation-image" />
        <div className="presentation-content">
          <h1 className="presentation-title">{result.title}</h1>
          <p className="presentation-infos">
            {result.author} - {result.difficulty}
          </p>
        </div>
      </header>
      <ul className="ingredients">
        {result.ingredients.map((ingredient) => (
          <li className="ingredient" key={ingredient.id}>
            <span className="ingredient-quantity">
              {ingredient.quantity} {ingredient.unit}
            </span>{' '}
            {ingredient.name}
          </li>
        ))}
      </ul>
      <ol className="steps">
        {result.instructions.map((instruction) => (
          <li key={instruction} className="step">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetail;