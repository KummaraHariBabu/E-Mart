

import React from 'react'

import { mobileData } from '../data/mobiles'
import NavBar from './NavBar'

const firstFiveImages = mobileData.slice(0,5)

const Mobiles = () => {
  return (
    <>
    <h2 className='protitle'>Mobiles</h2>
    <div className="pro-Section">
        {
        firstFiveImages.map((item)=>{
            return(
                <div className='img-section'>
                    <img src={item.image} alt='' className='imgbox'/>
                </div>
            )
        })
        }
    </div>
    </>
  )
}

export default Mobiles