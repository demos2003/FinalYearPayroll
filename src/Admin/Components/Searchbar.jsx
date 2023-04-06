
import React from 'react';
// import Header from './Header.js';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function Searchbar(){
   const [active, setActive] = useState()
     return(
        <div className='search-holder'>
          
           <input id="form_phone" placeholder='Search'  name="search" className="form-control search-bar" />
           {/* <button onClick={() => setActive(false)} >close
           {active === false && <Searchbar/>}
           </button> */}
          
        </div>
     ) ;
}

export default Searchbar;