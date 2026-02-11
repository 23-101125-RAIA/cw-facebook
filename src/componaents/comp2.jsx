import React from 'react';
import './comp2.css'
import img7 from '../asserts/ava1.png'
import ic1 from '../asserts/ic1.png'
import ic2 from '../asserts/ic2.png'
import ic3 from '../asserts/ic3.png'
const Comp2 = () => {
    return (<>
<div className='comp2-div'>
<img className='comp2-ava' src={img7} alt="" />
<input
  type="text"
  className="comp2-input"
  placeholder="What’s on your mind, Jenny"
/></div>
<div className='comp2-div2'>
    <div className='comp2-div3'>
<img className='comp2-icon' src={ic1} alt="" />
<p className='comp2-text'>Live video</p>
    </div>

     <div className='comp2-div3'>
<img className='comp2-icon' src={ic2} alt="" />
<p className='comp2-text'>Photo/video</p>
    </div>

     <div className='comp2-div3'>
<img className='comp2-icon' src={ic3} alt="" />
<p className='comp2-text'>Feeling/activity</p>
    </div>
</div>


    </>  );
}
 
export default Comp2;