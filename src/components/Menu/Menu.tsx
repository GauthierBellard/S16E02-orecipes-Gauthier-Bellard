
import { Link } from 'react-router-dom';
import { IRecipes } from '../../@types';
import RecipeTitle from '../RecipeTitle/RecipeTitle';


interface MenuProps {
  recipes:IRecipes[],
}

function Menu ({recipes}:MenuProps){
  console.log(recipes);
  
  return (
    <aside className="menu">
      <Link className="menu-label" to="/">Accueil</Link>
      <ul className="menu-list">
        {recipes.map((recipe) => {
          return(
        < RecipeTitle key={recipe.id} title={recipe} />
        )})}
      </ul>
    
    </aside>
  )
}

export default Menu;