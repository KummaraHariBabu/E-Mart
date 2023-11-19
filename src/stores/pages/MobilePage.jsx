import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const MobilePage = () => {

    const [selectedCompany,setSelectedCompany] = useState([]);

    const changeHandler = (ph)=>{
        if(selectedCompany.includes(ph)) {
            setSelectedCompany(selectedCompany.filter(item => item !== ph))
        } else {
            setSelectedCompany([...selectedCompany,ph])
        }
    }

    const filteredCompany = selectedCompany.length===0?
    mobileData : mobileData.filter((orange)=>selectedCompany.includes(orange.company));

  return (
    <>
      <NavBar/>
      <div className="full-page">
        <div className="pro-selected">
            {
                mobileData.map((phone)=>{
                    return(
                        <div className='pro-input'>
                            <label >
                                <input type="checkbox" name="" id="" 
                                 checked = {selectedCompany.includes(phone.company)}
                                 onChange={()=>changeHandler(phone.company)}
                                />
                                {phone.company}
                            </label>
                        </div>
                    )
                 })
            }
        </div>

        {/* <h2 className='protitle'>Mobiles</h2> */}
        <div className='pageSection'> 
            {
                filteredCompany.map((item)=>{
                    return(
                        <div>
                            <Link to={`/mobiles/${item.id}`}>
                                <div className='pageImg'>
                                    <img src={item.image} alt=''/>
                                </div>
                            </Link>
                            <div>
                                {item.company},{item.model}
                            </div>
                        </div>
                    )
                })
                
            }
        </div>
      </div>
    </>
  )
}

export default MobilePage