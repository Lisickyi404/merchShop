import './Footer.scss'
import React from 'react'
import logo from '../Header/logo.svg'
import {AiFillFacebook,AiOutlineInstagram,AiFillLinkedin} from 'react-icons/ai'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


export default function Footer(){
    const menuList = [{title:'Наборы',path:'sets'},{title:'Все товары',path:''},{title:'Производство'},{title:'Информация'}]
    const infoList = [{title:'О нас',path:'sets'},{title:'ЧаВо',path:''},{title:'Контакты'}]
    return(
        <div className="Footer">
            <div className="footer_content">

                <div className='contacts'>
                    <img src={logo}/>   
                   <div>
                   <p className='text'>Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее </p>
                    <p className='phone'>+380 630 130 103</p>
                    <p className='email'>example@gmail.com</p>
                    </div>

                    <div className='icons'>
                        <AiFillFacebook color='#1877F2' size={34} className='icon'/>
                        <AiOutlineInstagram color='#EC3397' size={34}  className='icon'/>
                        <AiFillLinkedin color='#0A66C2' size={34}  className='icon'/>
                    </div>
                </div>

                <div className='categories'>
                        <p>Категории</p>

                        <ul className='menu'>

                            {menuList.map((el,i)=>
                            <li className='menu_link'>{el.title}</li>)}

                        </ul>
                </div>

                <div className='categories info'>
                    <p>Информация</p>

                    <ul className='menu'>

                        {infoList.map((el,i)=>
                        <li className='menu_link'>{el.title}</li>)}

                    </ul>
                </div>

                <div className='connect_form'>
                        <p className='connect_title'>Связаться с менеджером</p> 
                        <p className='connect_about'>Есть вопрос на который не нашли ответ? Оставьте контакт и наш менеджер свяжеться с вами</p>   
                        <div className='contact_label'>
                            <input placeholder='Номер телефона'/>
                            <BsFillArrowRightCircleFill color='#524983' size={35}/>
                        </div>   
                </div>
            </div>
        </div>
    )
}