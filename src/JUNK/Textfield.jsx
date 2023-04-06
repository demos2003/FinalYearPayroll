import '../Views/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Searchbar(){
     return(
        <div className='search-holder'>
           <p>Search:</p>
           <input id="form_phone"  name="search" className="form-control search-bar" />
        </div>
     );
}

export default Searchbar;