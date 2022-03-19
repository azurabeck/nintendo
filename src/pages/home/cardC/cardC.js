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
                <Link to='/' className='button-home'>Games de A-Z</Link>
                <div className='button-home' >Meus Games</div>
                <Link to='/' className='button-home'>Lista de Desejos</Link>
                <Link to='/' className='button-home'>Ranking</Link>
                <Link to='/' className='button-home'>Vídeos</Link>
            </div>
        </div>
    );
};

export default cardB;