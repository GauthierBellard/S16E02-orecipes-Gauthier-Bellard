import './Header.scss'

function Header (){
  
  return(
    <div>
      <div className='Header-container'>
        <figure className="image is-64x64">
          <img src="../../assets/logo.png" alt="logo" />
        </figure>
        <form className='auth'>
          <div className='control'>
            <input className="input is-hovered" type="text" placeholder="Adresse Email" />
          </div>
          <div className='control'>
            <input className="input is-hovered" type="text" placeholder="Mot de passe" />
          </div>
          <button className='button' type='submit'>OK</button>
          
        </form>

      </div>
    </div>
  )
}

export default Header;