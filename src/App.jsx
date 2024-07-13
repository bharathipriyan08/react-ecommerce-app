import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Context/CartProvider'
import NavigationComponent from './Components/NavigationComponent/NavigationComponent'

const App = () => {
    return (
        <CartProvider>
            <NavigationComponent/>
        </CartProvider>
    )
}

export default App;