import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CartProvider from '../../Context/CartProvider'
import HomeComponent from '../HomeComponent/HomeComponent'
import CartComponent from '../CartComponent/CartComponent'
import './NavigationComponent.css'
const NavigationComponent = () => {
    return (



        <React.Fragment>
            <BrowserRouter>
                <nav className='nav-bar'>
                    <ul>
                        <li id='home'><Link to='/'>Home</Link></li>
                        <li id='cart'><Link to='/cart'>Cart</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route exact path='/' element={<HomeComponent/>}></Route>
                    <Route exact path='/cart' element={<CartComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default NavigationComponent