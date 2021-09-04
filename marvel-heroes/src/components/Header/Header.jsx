import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    
    return ( 
        <div className='container row header'>
        <h1 className='col-4'>Marvel</h1>
        <ul className='col-6'>
            <li><Link to='../home'>Home</Link></li>
        </ul>
    </div>
    );
}

export default Header;