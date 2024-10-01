import './Post.scss';


function Post() {

  return(
    <div>
      <div className='header-post'>
        <h1 className='title'>Les recettes oRecipes</h1>
        <p className='subtitle'>voici nos 6 recettes</p>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <figure className="image is-3by2">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <button className="button">
              Voir la recette
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Post;