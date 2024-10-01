import { IRecipes } from "../../@types"
import { Link } from 'react-router-dom';

interface title {
  title:IRecipes
}

function RecipeTitle({title}:title) {

return(
  <li>
    <Link to={title.title}>{title.title}</Link>
  </li>
)
}

export default RecipeTitle;