import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getGameList } from '../../../_store/actions/nintendoActions';
import Zelda from '../../../_staticUX/zelda-logo.svg'
import './style.scss'

const CardB = () => {
    const dispatch = useDispatch()
    const access_token = useSelector((state) => state.nintendo.access_token)



    return (
        <div className='btnArea'>
            <div className='car-divisor'>
                <span></span> <img alt='zelda logo decoration' src={Zelda}/> <span></span> 
            </div>
            
            <div className='buttons'>
                <div className='button-home' onClick={() => dispatch(getGameList(access_token))} >Games de A-Z</div>
                <div className='button-home' > Meus Games </div>
                <Link to='/' className='button-home'>Lista de Desejos</Link>
                <Link to='/' className='button-home'>Ranking</Link>
                <Link to='/' className='button-home'>Vídeos</Link>
            </div>
        </div>
    );
};

export default CardB;