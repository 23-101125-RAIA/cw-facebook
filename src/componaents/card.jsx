import React from 'react';
import './card.css'
import img5 from '../asserts/av.png'
import img6 from '../asserts/im2.png'
const Card = () => {
    return ( <>
    <div className='card-div'>
<img className='card-img' src={img6} alt="" />
        <div className='card-div2'>
            <img className='card-avater' src={img5} alt="" />
            <p className='card-text'>Islam Ali</p>
        </div>
    </div>
    </> );
}
 
export default Card;