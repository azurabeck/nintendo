import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.scss'

const cardA = () => {
    return (
        <div className='carrossel'>
            <span className='bgHoverAll'>
                <div className='mega-title'>
                    <strong>ESTRELAS SWITCH</strong> 

                    os melhores exclusivos de cada categoría
                </div>
            </span>
            <div className='car-display'>
                <div className='bullets'>
                    <span className='active'></span>
                    <span />
                    <span />
                </div>
                <div className='title'>Jogos de Esporte <FontAwesomeIcon icon={ faArrowRight } size='xs'/></div>
            </div>
        </div>
    );
};

export default cardA;