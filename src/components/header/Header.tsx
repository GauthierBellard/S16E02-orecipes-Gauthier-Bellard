import './Header.scss'
import logo from'../../assets/logo.png'
import { useState } from 'react';

function Header (){

  const [connected, setConnected]= useState(false);
  const [nickname, setNickname]= useState('');

  const authentification = async (emailInput:string , passwordInput:string) =>{
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method:'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({email:emailInput,password:passwordInput}),
      })
      const data = await response.json();
      console.log(data);

      setConnected(true);
      setNickname(data.pseudo)

      
    } catch (error) {
      console.log('catch/error', error);
      
    }

  };
  
  return(
    <div>
      <div className='Header-container'>
        <figure className="image is-64x64" >
          <img src={logo} alt="logo" />
        </figure>

        {!connected && 
        <form className='auth' onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const data = Object.fromEntries(formData);

          authentification(data.email as string, data.password as string)

           }}>
          <div className='control'>
            <input className="input is-hovered" type="text" name="email" placeholder="Adresse Email" />
          </div>
          <div className='control'>
            <input className="input is-hovered" type="text" name="password" placeholder="Mot de passe" />
          </div>
          <button className='button' type='submit'>OK</button>
          
        </form>
        }

        {connected && <div className='Welcome'>Bienvenue {nickname}</div>}

      </div>
    </div>
  )
}

export default Header;