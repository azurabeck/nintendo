import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss'


const cardB = () => {
    return (
        <Link to='/' className='user-area logout'>
            <span className='bgAboveAll'></span>
            <div className='user-photo'></div>
            <div className='user-area-text'>
                <div className='title'>Você não esta logado!</div>
                <div className='desc'>Logue agora para desbloquear alguns recursos do site!</div>
            </div>


        </Link>
    );
};

export default cardB;