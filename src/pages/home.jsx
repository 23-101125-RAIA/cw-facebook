import React from 'react';

import './style.css'
import logo from "../asserts/Group 1.png"
import Navicon from '../componaents/navicon'
import Watchbtn from '../componaents/watchbtn';
import Btn1 from '../componaents/btn1';
import Titlebtn from '../componaents/title';
import Comp1 from '../componaents/Comp1';
import Card from '../componaents/card';
import Comp2 from '../componaents/comp2';
import Post from '../componaents/post';
import Comp3 from '../componaents/comp3';

const Home = () => {
    return ( <>
    
 <body>
    <nav className='nav'>
        <img className='logo' src={logo}  alt=""/>
    <div className='nav-div'>
        <Navicon />
          <Navicon />
            <Navicon />
              <Navicon />

    </div>
    
    </nav>
    <main>
    <section className='big-div'>
        <Btn1 />
        <article className='watch-big-div'>
            <Watchbtn />
              <Watchbtn />
                <Watchbtn />
                  <Watchbtn />
        </article>
        <Titlebtn />
        <article className='comp1-big-div'>
            <Comp1 />
            <Comp1 />
            <Comp1 />
            <Comp1 />
            <Comp1 />
            <Comp1 />
        </article>
    </section>

    <section className='middel-comp'>
        <article className='cards-big-div'>
            <Card />
            <Card />
            <Card />
            <Card />

        </article>

        <article className='comp2-big-div'>
            <Comp2 />
        </article>
     
            <Post />
  <Post />
  <Post />
  
  


    </section>
    <section className='left-big-div'>
        <Titlebtn />
        <Comp3 />
    <Comp3 />

    </section>

    </main>
 </body>
    
    </> );
}
 
export default Home;