import React from 'react';
import './comp3.css'
import img9 from '../asserts/ava3.png'
import Btn1 from './btn1';
const Comp3 = () => {
    return ( <>
    <div className='comp3-div'>
          <div className='comp3-div2'>
        <img className='comp3-ava' src={img9} alt="" />
        <p className='comp3-text'>Guy Hawkins</p>
        <p className='comp3-subtext'>4H</p></div>
    
    <div className='comp3-div2'>
        <Btn1 />
         <button className='btn2'>Delete</button>
    </div></div>
    </> );
}
 
export default Comp3;