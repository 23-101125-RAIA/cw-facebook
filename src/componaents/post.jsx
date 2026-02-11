import React from 'react';
import './post.css'
import img8 from '../asserts/ava2.png'
import ic4 from '../asserts/ic4.png'
import dots from '../asserts/dots.png'
import post from '../asserts/post.png'
const Post = () => {
    return ( <>
    <section className='post-big-div'>
    <div className='post-top'>
        <div className='post-top-div'>
<img className='post-ava' src={img8} alt="" />
<div className='ost-top-div1'>
    <p className='post-text'>Albert Flores</p>
    <div className='post-top-div2'>
        <p className='post-subtext'>2d</p>
        <img className='post-small-ic' src={ic4} alt="" />
    </div>
</div>
        </div>
        <img className='dots' src={dots} alt="" />
    </div>
    <img className='post' src={post} alt="" />
    </section>
    </> );
}
 
export default Post;