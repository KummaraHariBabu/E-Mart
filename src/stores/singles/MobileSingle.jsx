import React, { useState } from 'react'

import { mobileData } from '../data/mobiles'
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MobileSingle = () => {
     const {id} = useParams()
     const product = mobileData.find((item)=>item.id === id);
     
   return (
    <>
    <NavBar/>
     <div className="ind-page">
        <div className="ind-image">
            <img src={product.image} />
         </div>
         <div className="ind-details">
            <div className="ind-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h2>{product.price}</h2>
            </div>
            <div className="ind-dec space">
                <p>{product.description}</p>
            </div>
            <button>Add to Cart</button>
         </div>
    </div>
    </>

      
   )
}

export default MobileSingle