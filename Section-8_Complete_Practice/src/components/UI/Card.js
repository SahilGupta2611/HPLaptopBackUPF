import React from 'react'
import classes from '../UI/Card.module.css'
const Card = (props)=>{

    return (
        <div className={`${classes.Card} ${props.className}`}>
            {props.children}
        </div>
    );

}

export default Card;