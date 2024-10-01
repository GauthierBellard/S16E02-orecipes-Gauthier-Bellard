import { IRecipes } from "../../@types"

interface title {
  title:IRecipes
}

function RecipeTitle({title}:title) {

return(
  <li>
    <a>{title.title}</a>
  </li>
)
}

export default RecipeTitle;