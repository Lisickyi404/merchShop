import logo from './logo.svg'
import './Header.scss'

import React from 'react'

import { Link } from 'react-router-dom'

import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux'

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

    const menuList = [ {title:'Наборы',path:'sets',categories:[]}, allItems, {title:'Пошив',path:'making',categories:[]},{title:'Информация',categories:[]} ]
    const [menuLink,setMenuLink] = React.useState(0)

    const [subMenu,setSubMenu] = React.useState(false)

    const [showBasket,setShowBasket] = React.useState(false)
    let items = useSelector(state=>state.basket.items)
    

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
             {items.length>0 ?
              <>   
              <AiOutlineShoppingCart size={33} color={'green'}
                onClick={()=>setShowBasket(true)}
                />
                <p className='cout'>{items.length}</p>
                
                </> :null

                }
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
                   <Link to={el.path}  >
                    <li className={menuLink==i?'menu_link_avtive':'menu_link'}
                    onClick={()=>setMenuLink(i)}
                    onMouseEnter={()=>setSubMenu(i)}
                    onMouseLeave={()=>setSubMenu(-1)}
                    
                    >
                       {subMenu == i ?
                        <div className='sub_menu'>
                            <ul >
                                {el.categories.map((el,i)=>
                                <li>{el.title}</li>)}

                            </ul>
                        </div>:null}
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