import './Basket.scss'

import React from 'react'

import MiniItem from './MiniItem'
import { Link } from 'react-router-dom'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'

import { plusItem,minusItem, deleteItem,clearBasket} from '../../Redux/Basket'

export default function Basket({setShowBasket}){

    let items = useSelector(state=>state.basket.items)
    const dispatch = useDispatch()

    const [order,setOrder] = React.useState({})

    const submitForm = (e) =>{
        e.preventDefault()
       
        const message = {
            name : e.target[0].value,
            phone : e.target[1].value,
            mail : e.target[2].value,
            items:items,
        }
    
        setStateForm(2)
        setOrder(message)
      
        
      
    }

    const sendOrder = () =>{
        setShowBasket(false)
        console.log(order)
        dispatch(clearBasket())
    }

   const [stateForm,setStateForm] = React.useState(1)
    /* 0=корзина пуста 1=в корзине есть товары 2=подтвердить заказ*/ 


   

    const [fullPrice,setFullPrice] = React.useState(0)
    React.useEffect(()=>{
        const sum = items.reduce((Sum,a)=>Sum+(a.item.price * a.cout),0)
        setFullPrice(sum)
        if(items<1){
            setStateForm(0)
        } else  if(items>1){
            setStateForm(1)
        }
       
        
       
    },[items])

    return(
        


        <div className="Basket_wrapper">
            {stateForm==1 ? <div className='Basket'>
                <AiOutlineCloseCircle className='closeForm' onClick={()=>setShowBasket(false)}/>
                <div className='left'>
                    
                    
                    <form  onSubmit={(e)=>submitForm(e)}>
                     <h3>Оформить заказ</h3>
                     <p>Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
                     <input type='text' placeholder='Введите имя' />
                     <input placeholder='Почта' type='email'/>
                     <input placeholder='Номер телефона' type='phone'/>
                     <button type='submit'>Заказать</button>
                    </form>
                </div>

                <div className='right'>
                <h3 className='right_title'>Корзина</h3>
                
                <ul>
                    {items.map((el,i)=>
                    <li>
                        <MiniItem
                        item={el.item}
                        cout={el.cout}
                        itemInfo={el}
                        setFullPrice={setFullPrice}
                        i={i}/>
                    </li>)
                        }
                </ul>
                
                <div className='right_footer'>
                <p>Заказ № {110293}</p>
                <h3 className='sum'>Всего: $ {fullPrice}</h3>
                </div>

                </div>

            </div>  
            : null}
            
            {stateForm==0 ? <div className='Basket'>
                <div className='null_basket'>
                    <h3 className='null_basket_title'>Ваша корзина пуста <span>🙄</span></h3>
                    <Link to={'/sales'} onClick={()=>setShowBasket(false)}>
                    <button className='goCatalog'>Вернуться к товарам</button>
                    </Link>
                </div>
            </div> : null}

            {stateForm==2 ?
            <div className='Basket'>
                <div className='confirm_buttons'>
                    <button className='confirm_button' onClick={()=>sendOrder()}>Подтвердить заказ</button>
                    <button className='cancel_button' onClick={()=>setShowBasket(false)}>Отменить заказ</button>
                </div>
            </div>
            :null}

            <div className='overlay' onClick={()=>setShowBasket(false)}></div>
        </div>
    )
}