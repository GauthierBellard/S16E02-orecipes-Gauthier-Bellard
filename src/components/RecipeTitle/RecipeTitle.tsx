import { IRecipes } from "../../@types"
import { NavLink } from 'react-router-dom';

interface title {
  title:IRecipes
}

function RecipeTitle({title}:title) {

return(
  <li>
    <NavLink to={`/recipe/${title.slug}`} className={({isActive}) => isActive ? 
    'menu-link menu-link--active' : 'menu-link'}>
      {title.title}</NavLink>
  </li>
)
}

export default RecipeTitle;