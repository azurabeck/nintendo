import React , { useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.scss'
import { carrosselData } from './carrosselData.js'

const CardA = () => {

       const [ slice , getSlice ] = useState({
           f: 0,
           s: 1
       })
       
       const handleNext = () => {
            if ( carrosselData && carrosselData.length === slice.s ) {
                getSlice({f: 0, s: 1})
            } else {            
                getSlice({f: slice.f + 1, s: slice.s + 1})
            }
        }

       useEffect(
        () => {
          let timer1 = setTimeout(() => handleNext(), 5 * 1000);
          return () => {
            clearTimeout(timer1);
          };
        },
      );

       return carrosselData ? carrosselData.slice(slice.f , slice.s).map((item, i) => {
            
            const background = {
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }


            return (
                <div className='carrossel' key={i} style={background}>
                    <span className='bgHoverAll'>
                        <div className='mega-title'>
                            <strong>ESTRELAS SWITCH</strong> 

                            os melhores exclusivos de cada categoría
                        </div>
                    </span>
                    <div className='car-display'>
                        <div className='bullets'>
                            {
                                carrosselData.map((bullets , index) => {
                                    return <span className={slice.f === index ? 'active' : null} 
                                                 onClick={() => getSlice({ f: index , s: index + 1  })}></span>
                                })
                            }
                        </div>
                        <div className='title'> {item.title} <FontAwesomeIcon icon={ faArrowRight } size='xs'/></div>
                    </div>
                </div>
            )
        }) : null
       
    };

export default CardA;