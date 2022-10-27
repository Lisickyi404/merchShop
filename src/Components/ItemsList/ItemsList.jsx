import './ListStyle.scss'
import ItemModal from '../ItemModal/ItemModal'
import axios from 'axios'
import Item from '../Item/Item'

import img from './img/ItemImg.png'

import React from 'react'

import {IoIosArrowDropleft,IoIosArrowDropright} from 'react-icons/io'
import { BiPointer } from 'react-icons/bi'

import { useSelector } from 'react-redux'

export default function ItemsList(){

    const [modal,setModal] = React.useState(false)
    const [items,setItems] = React.useState([])
    const [itemsPage,setItemsPage] = React.useState(1)
    const [coutPages,setCoutPages] = React.useState(0)

    const [needReload,setNeedReload] = React.useState(true)
    
    let basket = useSelector(state=>state.basket.items)
    
    React.useEffect(()=>{
        axios.get(`https://634e8ddaf34e1ed8268f8bea.mockapi.io/items/`).then((res)=>
        {   

            setCoutPages((res.data.length)/6)
           
        })
    },[])

    React.useEffect(()=>{
    
        setNeedReload(false)
    },[basket])


        React.useEffect(()=>
        {
            axios.get(`https://634e8ddaf34e1ed8268f8bea.mockapi.io/items/?p=${itemsPage}&limit=6`).then(res=>{  
                setItems(res.data)
             
                
            })
        },[itemsPage])
 


    return(
        <div className="ItemsList">
            
            {
                items.length>1  && !needReload ?
                items.map((el,i)=>
                <Item key={el.id}
                setModal={setModal}
                itemInfo = {el}
                item={el.item}
                />
    
                )
            
            :null
            } 

<div className='nav'>

<span className='show'>
    Показать ещё
</span>
<div className='nav_pages'>
<IoIosArrowDropleft
onClick={()=>itemsPage>0?setItemsPage(itemsPage-1):null}
size={40}
style={{ cursor: 'pointer'}}
/>
<ul className='pages'>
     {(Array(10).fill().map((e, i) => i + 1)).map((el,i)=>
    <li
    className={el==itemsPage ? 'active' : null}
    onClick={()=>setItemsPage(el)}
    >
        {el}
    </li>)
    
    } 

    
</ul>
<IoIosArrowDropright
onClick={()=>itemsPage<coutPages ? setItemsPage(itemsPage+1):null}
size={40}
style={{ cursor: 'pointer'}}
/>
</div>
</div>

           {Object.keys(modal).length!=0  ?

           <ItemModal
           setModal={setModal}
           item={modal}
           
           images={[img,img,img,img,img]}
           
           />
           : null}
            
        </div>
    )
}