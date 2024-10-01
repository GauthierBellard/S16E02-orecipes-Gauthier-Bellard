import { Link } from 'react-router-dom';


function Menu (){

  return (
    <aside className="menu">
      <p className="menu-label">Accueil</p>
      <ul className="menu-list">
        <li><a>Cookies au beurre de cacahuète</a></li>
        <li><a>Macaron framboisier</a></li>
      </ul>
    
    </aside>
  )
}

export default Menu;