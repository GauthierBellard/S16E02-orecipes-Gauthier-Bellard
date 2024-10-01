import './Post.scss';
import { IRecipes } from '../../@types';
import Card from '../Card/Card';


interface PostProps {
  theRecipes:IRecipes[],
}

function Post(props:PostProps) {

  return(
    <div>
      <div className='header-post'>
        <h1 className='title'>Les recettes oRecipes</h1>
        <p className='subtitle'>voici nos 6 recettes</p>
      </div>
      <div className="card-container">

        {props.theRecipes.map((currentRecipe) => {
          return(
  
        <Card key={currentRecipe.id} recipe={currentRecipe} />

      )})}
      </div>
    </div>

  );
}

export default Post;