import React from 'react';
import { Link } from 'react-router-dom';
import "./aapointmentCard.css";

const AppointmentCard = ({item, deleteCartItems}) => {
    return (
        <div className='CartItemCard'>
            <img src={item.image} alt="ssa" />
            <div>
                <Link to={`/doctor/${item.doctor}`}>{item.name}</Link>
                <span>{`Fee: $ ${item.price}`}</span> 
                <p onClick={() => deleteCartItems(item.doctor)}>Remove Appointment</p>
            </div>
        </div>
    ) 
}

export default AppointmentCard