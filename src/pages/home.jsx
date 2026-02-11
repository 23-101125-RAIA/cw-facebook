import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import logo from "../asserts/Group 1.png"
import Navicon from '../componaents/navicon'

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

    
 </body>
    
    </> );
}
 
export default Home;