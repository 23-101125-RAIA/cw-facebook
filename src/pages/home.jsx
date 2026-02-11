import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import logo from "../asserts/Group 1.png"
import Navicon from '../componaents/navicon'
import Watchbtn from '../componaents/watchbtn';
import Btn1 from '../componaents/btn1';
import Titlebtn from '../componaents/title';

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
    <section className='big-div'>
        <Btn1 />
        <div className='watch-big-div'>
            <Watchbtn />
              <Watchbtn />
                <Watchbtn />
                  <Watchbtn />
        </div>
        <Titlebtn />
    </section>

    
 </body>
    
    </> );
}
 
export default Home;