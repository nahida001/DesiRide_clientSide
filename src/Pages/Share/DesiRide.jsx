import React from 'react';
import Logo from "../../assets/logo.png"
const DesiRide = () => {
    return (
        <div className='flex items-end'>
           <img className='mb-2' src={Logo} alt="" /> 
           <p className='text-2xl -ml-3 font-extrabold'>DesiRide</p>
        </div>
    );
};

export default DesiRide;