import { IRecipes } from "../../@types"

interface recipe {
  recipe:IRecipes
}

function Card({recipe}:recipe){

  return(
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by2">
            <img
                src={recipe.thumbnail}
                alt={recipe.title}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{recipe.title}</p>
                <p className="subtitle is-6">difficulté: {recipe.difficulty}</p>
              </div>
            </div>

            <button className="button">
              Voir la recette
            </button>
          </div>
        </div>
      );

}

export default Card;