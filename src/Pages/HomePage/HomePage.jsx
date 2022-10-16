import React from "react";
import "./HomePage.scss";

import {BsFillEmojiSmileUpsideDownFill} from 'react-icons/bs'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'

import imgLogo from './img/intro_left.png'
import imgCreative from './img/Pangolin.png'
import imgCreativeRight from './img/Photo.png'
import imgSweater from './img/Sweater.png'

import Ex1 from './img/1.png'
import Ex2 from './img/2.png'
import Ex3 from './img/3.png'
import Ex4 from './img/4.png'

import lamp from './img/lamp.svg'
import rocket1 from './img/rocket1.svg'

export default function HomePage(){

    const collection = [[Ex1,Ex2,Ex3,Ex4],[Ex1,Ex2,Ex3,Ex4],[Ex1,Ex2,Ex3,Ex4],[Ex1,Ex2,Ex3,Ex4],[Ex1,Ex2,Ex3,Ex4]]
    const [imgPage,setImgPage] = React.useState(0)

    const sendCallForm = (e) =>{
        e.preventDefault()
        const message = {
            name:e.target[0].value,
            email:e.target[1].value,
            phone:e.target[2].value
        }
        console.log(message)
    }

    return(
        <div className="HomePage">
            
            <div className="intro_container">
                <div className="intro">

                
                <div className="intro_left">
                    <p className="intro_left_title">
                    Свежее дыхание в <br/>корпоративной жизни
                    </p>

                    <p className="intro_left_subtitle">
                    Ми вдосконалили процес замовлення продукції для того, щоб Ви і Ваша компанія сконцентрувались на основних задачах  досягали поставлених цілей.
                    </p>

                    <div className="intro_icons">
                        <div className="icon">
                            <BsFillEmojiSmileUpsideDownFill size={70}/>
                            <p className="icon_text">Высокое <br/> качество <b>ONLY</b> </p>
                        </div>

                        <div className="icon">
                            <BsFillEmojiSmileUpsideDownFill size={70}/>
                            <p className="icon_text">Высокое <br/> качество <b>ONLY</b> </p>
                        </div>

                        <div className="icon">
                            <BsFillEmojiSmileUpsideDownFill size={70}/>
                            <p className="icon_text">Высокое <br/> качество <b>ONLY</b> </p>
                        </div>

                    </div>

                </div>

                <div className="intro_right">

                    <img src={imgLogo}/>

                </div>
                </div>
            </div>

            <div className="getSet_container">
                <div className="getSet">
                    <div className="left">
                        <img src={imgCreative} className='img_crt'/>

                        <div className="about">

                            <p className="about_title">
                            Хотите удивить ваших коллег/партнеров <br/> необычными подарками?
                            </p>

                            <p className="about_subtitle">
                            Выбирайте готовые подарочные наборы или укажите <br/> критерии по которым мы соберем для Вас уникальный бокс.
                            </p>

                            <div className="about_buttons">

                                <button className="go">Перейти к наборам</button>
                                <button>Создать свой</button>

                            </div>


                        </div>
                    </div>
                    
                    <div className="right">
                        <img src={imgCreativeRight} className='img_right' width={300}/>
                    </div>

                </div>
            </div>


            <div className="food">
                <div className="food_left">
                    <img src={imgSweater} width={650}/>
                </div>

                <div className="food_right">
                    <div className="food_intro">
                        <p className="intro_title">Помимо готовой продукции высокого качества, мы можем для Вас произвести одежду, аксессуры, вкусности и другое под заказ.</p>
                        <p className="intro_subtitle">Благодаря личному производству мы изготавливаем <br/> большие партии в короткие сроки, а так же у Вас всегда <br/> есть возможность кастомизировать изделия.</p>
                        
                        <div className="examples">
                        <ul className="img_list">
                            {
                                collection[imgPage].map((el,i)=>
                                <li className="imgLi">
                                    <img src={el} width={100}/>
                                </li>)
                            }
                        </ul>
                        <div className="nav">
                            <IoIosArrowBack className="arr" size={30} onClick={()=>imgPage!=0?setImgPage(imgPage-1):null}/>
                            <p className="cout">{imgPage+1}/{collection.length}</p>
                            <IoIosArrowForward className="arr" size={30} onClick={()=>imgPage+1<collection.length?setImgPage(imgPage+1):null}/>
                        </div>
                        </div>
                       
                    </div>
                </div>

                
            </div>

            <div className="contact_form_container">
                <div className="contact_form">
                        
                        <div className="about">
                            <p className="about_title">
                            У вас своя уникальная идея <br/> по разработке мерча?
                            </p>

                            <p className="about_subtitle">
                            Изготовим мерч по вашему дизайну. Расскажем лайфхаки <br/> и ознакомим с  технологией производства, предоставим <br/> образцы матералов. 
                            </p>

                        </div>

                        <div className="images">
                            <img src={lamp} width={250}/>
                            <img src={rocket1}/>
                        </div>

                    <div className="send_message">
                        <p className="form_title">Введите свои контактные данные, и наш <br/> менеджер свяжется с Вами в течении 1 часа</p>
                    <form className="form" onSubmit={(e)=>sendCallForm(e)}>
                            <input placeholder="Ваше Имя"/>
                            <input placeholder="Ваша електронная почта"/>
                            <input placeholder="Ваш номер телефона"/>
                            <button type="submit">Заказать</button>

                        </form>
                    </div>

                </div>
            </div>


           
        </div>
    )
}