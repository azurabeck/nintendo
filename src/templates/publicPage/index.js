import React from 'react';
import './style.scss'

//PAGES
import CardA from '../../pages/home/cardA/cardA.js'

const publicPage = () => {
    return (
        <div className="container">
            <CardA />
            <div className="top">top</div>
            <div className="btn1">Jogos A-Z</div>
            <div className="btn2">Meus Jogos</div>
            <div className="btn3">Vídeos</div>
        </div>
    );
}

export default publicPage;