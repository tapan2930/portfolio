import React from 'react'

import './card.scss'


const Card = ({value, img}) =>{

    return(
    <div className="card" >
        <div className="card-logo">
            <img src={img} alt="" srcset="" width="30"/>
        </div>
        <p>{value}</p>
    </div>  
       
    )
}

export default Card
