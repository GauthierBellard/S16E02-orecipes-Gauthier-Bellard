
import { IRecipes } from '../../@types';
import RecipeTitle from '../RecipeTitle/RecipeTitle';


interface MenuProps {
  recipes:IRecipes[],
}

function Menu ({recipes}:MenuProps){
  console.log(recipes);
  
  return (
    <aside className="menu">
      <p className="menu-label">Accueil</p>
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