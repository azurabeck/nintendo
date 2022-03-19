import React from 'react';
import './style.scss'

//PAGES
import CardA from '../../pages/home/cardA/cardA.js'
import CardB from '../../pages/home/cardB/cardB.js'
import CardC from '../../pages/home/cardC/cardC.js'


const publicPage = () => {
    return (
        <div className="container">
            <CardA />
            <CardB />
            <CardC />
        </div>
    );
}

export default publicPage;