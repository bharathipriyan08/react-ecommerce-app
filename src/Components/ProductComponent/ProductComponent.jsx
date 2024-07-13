import React, { useContext, useState } from 'react'
import './ProductComponent.css'
import CartProvider from '../../Context/CartProvider'

const ProductComponent = ({productName, addToCart}) => {

    const [prodNum,setProdNum] = useState(0)

    const decHandler = () =>{
        if(prodNum>0)
            setProdNum(prodNum-1)
    }

    const incHandler = () =>{
        addToCart(productName)
        setProdNum(prodNum+1)
    }

    return (
        <div className='product-container'>
            <p>{productName.title}</p>
            <img src= {productName.image} alt="Product Image" />
            <p>$ {productName.price}</p>
            
            <span><button onClick={decHandler}>-</button></span>
            <span><p>{prodNum}</p></span>
            <span><button onClick={incHandler}>+</button></span>
        </div>
    )
}

export default ProductComponent