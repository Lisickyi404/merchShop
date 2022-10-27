import './MakingHeader.scss'

import React from 'react'

import imgHeader from './img/klipartz.png'

import BookingForm from '../../Components/BookingForm/BookingForm'


export default function MakingHeader({img,title}){

    const [showForm, setShowForm] = React.useState(false)
    return(
        <div className='header_container'>
            <div className='making_header_wrapper'>
            <div className="MakingHeader">
            <div className='header_left'>
                <h3 className='header_left_title'>
                {title ? title : 'Современный мерч создает современные бренды'}
                </h3>

                <p className='header_left_description'>
                Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции.
Наша команда всегда погружается в концепт заказа для того, чтобы предложить вам лучшее решение, при этом оптимизировать затраты. 
 У нас широкий ассортимент  готовых моделей, так же изготовим любую продукцию по Вашему дизайну. 

                </p>

                <div className='header_actions'>

                    <button className='send_call' onClick={()=>setShowForm(true)}>
                    Оставить заявку
                    </button>

                    <span className='min_cout'>
                    Минимальное кол-во: 25
                    </span>

                </div>
            </div>

            <div className='header_right'>
           {/*      <img src={img ? img : imgHeader}/> */}
           <img src={imgHeader}/>
            </div>
            </div>
            </div>

        {showForm ? <BookingForm setShowForm={setShowForm}/>: null}
        </div>
       
   
        
    )
}