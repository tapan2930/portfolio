import React from 'react'
// import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './button.scss'

const MyButton = ({to, color, value, icon}) =>{
    return(
        <div className="myButton">
            <a className="link" href={to} target="_blank" rel="noreferrer">
            <div className={`linkBtn`} style={{backgroundColor:`${color.concat("50")}` ,  border:`1.5px solid ${color}`}} >
                <FontAwesomeIcon style={{color:`${color}`, fontSize:"1.1rem", width:"17px", height:"17px"}} icon={icon} />
                <p to = {to} style={{color:`${color}`, fontWeight:"400", fontSize:"1.2rem", display:"inline", marginLeft:"5px"}}>{value}</p>
            </div>  
            </a>
            
        </div>
    )
}

export default MyButton
