import React from 'react'
import {Link} from 'gatsby'


import './button.scss'

const MyButton = ({to, color, value}) =>{
    return(
        <div className="myButton">
            <Link to = {to} className={`linkBtn ${color}`} target="_blank" >{value}</Link>
        </div>
    )
}

export default MyButton
