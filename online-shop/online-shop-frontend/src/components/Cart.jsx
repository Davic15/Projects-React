import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseCart, getTotals, payCheckOut, removeFromCart } from '../features/cartSlice';

import classes from './Cart.module.css';

export const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCheckoutCart = () => {
        dispatch(payCheckOut())
    }

    return (
        <div className={classes['cart-container']}>
            <h2>Shopping Cart</h2>
            { 
                cart.cartItems.length === 0 ? (
                    <div className={classes['cart-empty']}>
                        <p>Your cart is currently empty</p>
                        <div className={classes['start-shopping']}>
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : 
                (
                    <>
                        <div>
                            <div className={classes["titles"]}>
                                <h3 className={classes['product-title']}>Product</h3>
                                <h3 className={classes['price']}>Price</h3>
                                <h3 className={classes['quantity']}>Quantity</h3>
                                <h3 className={classes['total']}>Total</h3>
                            </div>
                            <div className={classes['cart-items']}>
                                { cart.cartItems?.map(cartItem => (
                                    <div className={classes['cart-item']} key={cartItem.id}>
                                        <div className={classes['cart-product']}>
                                            <img src={cartItem.image} alt={cartItem.name} />
                                            <div>
                                                <h3>{cartItem.name}</h3>
                                                <p>{cartItem.description}</p>
                                                <button onClick={ () => handleRemoveFromCart(cartItem) }>Remove</button>
                                            </div>
                                        </div>
                                        <div className={classes['cart-product-price']}>${cartItem.price}</div>
                                        <div className={classes['cart-product-quantity']}>
                                            <button onClick={ () => handleDecreaseCart(cartItem) }>-</button>
                                            <div className={classes['count']}>{cartItem.cartQuantity}</div>
                                            <button onClick={ () => handleIncreaseCart(cartItem) }>+</button>
                                        </div>
                                        <div className={classes['cart-product-total-price']}>${cartItem.price * cartItem.cartQuantity}</div>
                                    </div>
                                ))}
                            </div>
                            <div className={classes['cart-summary']}>
                                <button className={classes['clear-cart']} onClick={ () => handleClearCart() }>Clear Cart</button>
                                <div className={classes['cart-checkout']}>
                                    <div className={classes['subtotal']}>
                                        <span>Subtotal</span>
                                        <span className={classes['amount']}>${cart.cartTotalAmount}</span>
                                    </div>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <button onClick={handleCheckoutCart}>Check out</button>
                                    <div className={classes['continue-shopping']}>
                                        <Link to='/'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                            </svg>
                                            <span>Continue Shopping</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) 
            }
        </div>
    )
}
