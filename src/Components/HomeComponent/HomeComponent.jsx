import axios from 'axios'
import React, { useEffect, useState,useContext } from 'react'
import { CartContext } from '../../Context/CartProvider'
import ProductComponent from '../ProductComponent/ProductComponent'
import './HomeComponent.css'
const HomeComponent = () => {

    const [products, setProducts] = useState([])
    const { addToCart, cart } = useContext(CartContext);

    const dataHandler = async () => {
        const product = await axios.get(`https://fakestoreapi.com/products`)
        setProducts(product.data);
    }

    useEffect(()=>{
        dataHandler();
    },[])

    return (
        <React.Fragment>
            <div className='container'>
                {products && products.map((iterator, index)=>(
                    <ProductComponent productName={iterator} key={index} addToCart={addToCart}/>
                ))}
            </div>
        </React.Fragment>
    )
}

export default HomeComponent