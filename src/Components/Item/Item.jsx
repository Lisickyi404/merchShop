import './Item.scss'
import img from './img/ItemImg.png'

import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
import {AiTwotoneStar} from 'react-icons/ai'
import {BiBasket} from 'react-icons/bi'

import { addItem,deleteItem} from '../../Redux/Basket'
import { useSelector,useDispatch } from 'react-redux'

import React from 'react'

export default function Item({setModal,itemInfo,item}){

    const PrevsImg = [img,img,img,img,img]
    const colors = ['#524983','#309F85','#309F85']

    const [like,setLike] = React.useState(false)
    const [buy,setBuy] = React.useState(false)
    const [imgIndx, setImgIndx] = React.useState(0)

    const dispatch = useDispatch()
 
    
    const likeItem = () => {
        console.log(item)
        setLike(!like)
    }

    const buyItem = (e) =>{
        e.preventDefault()
        e.stopPropagation()
  
       
        if (!buy){
            
            dispatch(addItem(itemInfo))
            console.log(itemInfo)
       
        } 
        if(buy){
            
             dispatch(deleteItem(itemInfo)) 
            console.log('удаление',itemInfo)
            
            
        }
        setBuy(!buy)
    }

    return(
        <div className="Item">
            <div className='promo'>
                <AiTwotoneStar
                className='like'
                size={35}
                color={like ? '#1FAB8A' : null}
                onClick={()=>likeItem()}
                

                />

                <img src={PrevsImg[imgIndx]}/>
                <div className='navArs'>
                    <IoIosArrowBack
                    style={{cursor:'pointer'}}
                    size={35}
                    onClick={()=>imgIndx!=0?setImgIndx(imgIndx-1):null}
                 
                    
                    />
                    <p>{imgIndx+1}/{PrevsImg.length}</p>
                    <IoIosArrowForward
                    style={{cursor:'pointer'}}
                    size={35}
                    onClick={()=>imgIndx<PrevsImg.length-1?setImgIndx(imgIndx+1):null}/>
                </div>
            </div>

            <div className='item_info' onClick={()=>setModal(item)}>

            <p className='item_title'>
            {item.title}
            </p>

            <p className='item_subtitle'>
            {item.subTitle}
            </p>
 
            <ul className='colors'>
                
                {item.colors.map((el,i)=>
                <li className='color' style={{backgroundColor:el}}> </li>)}

            </ul>

            <div className='item_footer'>
                <div className='price'>
                    <p className='price_value'>From Price <br/>{item.price}$</p>
                </div>

                <BiBasket
                size={45}
                color={buy?'#1FAB8A':null}
                onClick={(e)=>buyItem(e)}
                style={{cursor:'pointer'}}
                
                /> 
            </div>  

            </div>
        </div>
    )
}   