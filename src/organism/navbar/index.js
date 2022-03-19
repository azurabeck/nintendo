import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../_staticUX/nav-logo.svg'
import './style.scss'

const navbar = () => {
    return (
        <nav className='navbar'>
            <div className='brand'>
                <Link to='/'><img alt='' src={Logo}/></Link> 
            </div>
            <div className='menu'>
                <div className='clip'></div>

            </div>
        </nav>
    );
}

export default navbar;