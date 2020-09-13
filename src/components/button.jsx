import React from 'react'
import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './button.scss'

const MyButton = ({to, color, value, icon}) =>{
    return(
        <div className="myButton">
            <div className={`linkBtn`} style={{backgroundColor:`${color.concat("50")}` ,  border:`1.5px solid ${color}`}} >
                <FontAwesomeIcon style={{color:`${color}`, fontSize:"1.1rem", width:"20px", height:"20px"}} icon={icon} />
                <Link to = {to} className="link" style={{color:`${color}`, fontWeight:"400", fontSize:"1.2rem"}} target="_blank" >{value}</Link>
            </div>  
        </div>
    )
}

export default MyButton
