import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import classes from "./Home.module.css";

export const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  }
  return (
    <div className={classes["home-container"]}>
        { isLoading ? 
            <p>Loading...</p> : error ? <p>An error occured!</p> : 
            <>
                <h2>New Arrivals</h2>
                <div className={classes["products"]}>
                    {data?.map((product) => (
                        <div key={product.id} className={classes["product"]}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} />
                            <div className={classes["details"]}>
                                <span>{product.description}</span>
                                <span className={classes["price"]}>${product.price}</span>
                            </div>
                            <button onClick={() => handleAddToCart (product)}>Add to Cart</button>
                        </div> 
                    ))}
                </div>
            </>
        }
    </div>
  );
};
