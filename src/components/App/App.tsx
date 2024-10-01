import { useState } from 'react'
import Menu from '../Menu/Menu'
import Header from '../header/Header'
import Post from '../Post/Post'
import './App.scss'



function App() {
 

  return (
    <>
      <div className='container'>
        <Menu />
        <div className='content-container'>
          <Header />
          <Post />
        </div>
        
      </div>
      
    </>
  )
}

export default App
