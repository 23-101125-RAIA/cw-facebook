import React from 'react';
import './comp1.css'
import img4 from '../asserts/im1.png'
 const Comp1 = () => {
    return ( <> 
    <div className='comp1-div'>
          <img className='comp1-img' src={img4} alt="" />
          <p className='comp1-text'>UI / UX Designers & Developers</p>
    </div>
  
</>
    );
 }
  
 export default Comp1;