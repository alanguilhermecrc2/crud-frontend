import React from 'react'
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import { Login } from './Login';
import { Cadastrar } from './Cadastrar';
import { MaisInfo } from './MaisInfo';







export const Nav = () => {
  return (
    <BrowserRouter>
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
    <div className='container-fluid' style={{color: "9370DB"}}>
        <a className='navbar-brand' href='/'>
            MENU
        </a>  
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className='navbar-toggler-icon' ></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link className='nav-link active' to="/cadastro">
                        Cadastro
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link active' to="/login">
                        Login
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link active' to="/info">
                        Mais Informações
                    </Link>
                </li>
            </ul>
        </div>
         
    </div>
    </nav>
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastrar' element={<Cadastrar/>}></Route>
        <Route path='/info' element={<MaisInfo/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}
