import './Basket.scss'

import React from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'

import { plusItem,minusItem, deleteItem} from '../../Redux/Basket'

export default function Basket({setShowBasket}){

    let items = useSelector(state=>state.basket.items)
    const dispatch = useDispatch()


    const submitForm = (e) =>{
        e.preventDefault()
        console.log(e)
        const message = {
            name : e.target[0].value,
            phone : e.target[1].value,
            mail : e.target[2].value
        }
        console.log(message)
    }

   

    const MiniItem = ({item,cout,i,itemInfo}) =>{
        return (
            <div className='MiniItem' >
                {/* <img src={}/> */}
                <h3 className='title'>{item.title}</h3>

                <div className='params'>
                    <span style={{display:"flex",alignItems:'center'}}> Цвет 
                        <p style={{width:'20px',height:'20px',backgroundColor:'green',borderRadius:'100%'}}></p>
                    </span>

                    <span className='size'>
                        <p>Размер</p>
                        <h3>XS</h3>
                    </span>
                </div>

                <div className='cout size'>
                    <p className='cout_title'>Кол-во</p>
                    <div className='cout_value'>
                    <button onClick={()=>dispatch(minusItem(i))}>-</button>
                    <div className='cout_number'>
                    <h3>{cout}</h3>
                    <p className={cout==5 ? 'min' : 'hide'}>min.</p>
                    </div>
                    <button onClick={()=>dispatch(plusItem(i))}>+</button>
                    </div>
                </div>

                <h3 className='price'>
                ${item.price*cout}
                </h3>
                <AiOutlineCloseCircle className='close' onClick={()=>dispatch(deleteItem(itemInfo))}/>

                
            </div>
        )
    }

    const [fullPrice,setFullPrice] = React.useState(0)
    React.useEffect(()=>{
        const sum = items.reduce((Sum,a)=>Sum+(a.item.price * a.cout),0)
        setFullPrice(sum)
       
    },[items])

    return(
        <div className="Basket_wrapper">
            <div className='Basket'>

                <div className='left'>
                    
                    
                    <form  onSubmit={(e)=>submitForm(e)}>
                     <h3>Оформить заказ</h3>
                     <p>Введите свои контактные данные, и наш менеджер свяжется с Вами в течении 1 часа</p>
                     <input type='text' placeholder='Введите имя'/>
                     <input placeholder='Почта'/>
                     <input placeholder='Номер телефона'/>
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
            <div className='overlay' onClick={()=>setShowBasket(false)}></div>
        </div>
    )
}