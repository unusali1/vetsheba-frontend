import React from 'react';
import { Link } from 'react-router-dom';
import "./CartItemCard.css";

const CartMediItemCard = ({item, deleteCartItems}) => {
    return (
        <div className='CartItemCard'>
            <img src={item.image} alt="ssa" />
            <div>
                <Link to={`/medicine/${item.medicine}`}>{item.name}</Link>
                <span>{`Price: $ ${item.price}`}</span> 
                <p onClick={() => deleteCartItems(item.medicine)}>Remove</p>
            </div>
        </div>
    ) 
}

export default CartMediItemCard