import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'

import { plusItem,minusItem, deleteItem,clearBasket} from '../../Redux/Basket'

export default function MiniItem({item,cout,i,itemInfo}){

    const dispatch = useDispatch()
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