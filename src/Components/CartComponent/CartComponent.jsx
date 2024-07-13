import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartProvider';
import './CartComponent.css';

const CartComponent = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.qty;
        });
        setTotal(totalPrice.toFixed(2));
    }, [cart]);

    const checkOutHandler = () => {
        document.getElementById('upi').innerHTML = `<Button>UPI</Button>`
        document.getElementById('debit-card').innerHTML = `<Button>Debit Card</Button>`
    }

    return (
        <React.Fragment>
            <h2>Cart</h2>
            <div className='cartItems'>
                {cart.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>Price: $ {item.price}</p>
                            <p>Quantity: {item.qty}</p>
                            <p>Total : $ {item.price * item.qty}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>

                    ))
                )}
            </div>

            <p>Total : $ {total}</p>
            <div className='checkout'>
                <button id="checkout" onClick={checkOutHandler}>Checkout</button>
                <h4>Total : $ {total}</h4>
                <div id="upi"></div>
                <div id="debit-card"></div>
            </div>

        </React.Fragment>
    );
};

export default CartComponent;