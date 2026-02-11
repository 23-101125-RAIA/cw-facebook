import React from 'react';
import './watchbtn.css'
import img3 from '../asserts/w.png'
const Watchbtn = () => {
    return ( 
        <>
        <div className='watch-div'>
               <img className='watchicon' src={img3} alt="" />
     <p className='watchtext'>Watch</p>
        </div>
  
        </>
     );
}
 
export default Watchbtn;