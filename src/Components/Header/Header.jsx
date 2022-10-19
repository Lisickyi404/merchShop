import logo from './logo.svg'
import './Header.scss'

import React from 'react'

import { Link } from 'react-router-dom'

import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'

import Navbar from './HeaderMenu/Navbar'
import Basket from '../Basket/Basket'



export default function Header(){

    const allItems ={title:'Все товары',path:'/sales',

    categories:
        [
            {title:"Одежда",subTitles:["Рюкзак","Шапка","Кепка"]},
            {title:"Посуда",subTitles:["Кружки","Термосы"]},
            {title:"Для офиса",subTitles:["Ручки","Кружки","Наклейки"]},
        ]
    
}

    const menuList = [ {title:'Наборы',path:'sets'}, allItems, {title:'Производство'},{title:'Информация'} ]
    const [menuLink,setMenuLink] = React.useState(0)

    const [showBasket,setShowBasket] = React.useState(false)

    

    return(
        <div className="Header">
           <div className='header_top'>
           <div className='header_top_content'>
           <Link to="/">
           <div className='Logo'>
                <img src={logo}/>
            </div>
           </Link>

            <div className='finding'>
                <BiSearchAlt2 size={20}/>
                <input placeholder='Поиск'/>
            </div>

            <span className='phone'>
            +380 630 130 103
            </span>

            <div className='user'>
              {/*   <AiOutlineUser size={33}/> */}
                <div className='basket'>
                <AiOutlineShoppingCart size={33} color={'green'}
                onClick={()=>setShowBasket(true)}
                />
                <p className='cout'>3</p>
                </div>
          

                <ul className='setLang'>
                    <li>RU</li>
                    <p>/</p>
                    <li>ENG</li>
                </ul>
            </div>
            </div>
           </div>

            <div className='header_bottom'>

            <div className='header_menu'>

                <ul className='menu_list'>

                    {menuList.map((el,i)=>
                   <Link to={el.path}>
                    <li className={menuLink==i?'menu_link_avtive':'menu_link'}
                    onClick={()=>setMenuLink(i)}
                    
                    >
                        {el.title}
                    </li>
                   </Link>)}

                </ul>

                <p className='day-event'>
                Шопперы со скидкой - 25%    
                </p>

            </div>



            </div>
            
        {
            showBasket ? <Basket setShowBasket={setShowBasket}/> : null
        }

        </div>
    )
}