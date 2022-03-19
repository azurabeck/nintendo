import React from 'react';
import { Link } from 'react-router-dom'
import Zelda from '../../../_staticUX/zelda-logo.svg'
import './style.scss'


const cardB = () => {
    return (
        <div className='btnArea'>
            <div className='car-divisor'>
                <span></span> <img alt='zelda logo decoration' src={Zelda}/> <span></span> 
            </div>
            
            <div className='buttons'>
                <Link to='/'>Games de A-Z</Link>
                <Link to='/'>Meus Games</Link>
                <Link to='/'>Lista de Desejos</Link>
                <Link to='/'>Ranking</Link>
                <Link to='/'>Vídeos</Link>
            </div>
        </div>
    );
};

export default cardB;