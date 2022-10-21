import React from "react"
import './ItemModal.scss'

import img from './img/ItemImg.png'

import {AiOutlineCloseCircle} from 'react-icons/ai'

import {IoIosArrowDropleft,IoIosArrowDropright,IoIosArrowDown} from 'react-icons/io'

export default function ItemModal({setModal,item,images}){
    
    const [imgNum,setImgNum] = React.useState(0)
    const [size,setSize] = React.useState(0)
    
    const sizesTable =[
        {title:'XS',eqwl:'67/46'},
        {title:'S',eqwl:'69/51'},
        {title:'M',eqwl:'71/56'},
        {title:'L',eqwl:'74/61'},
        {title:'XL',eqwl:'76/66'},
        {title:'2XL',eqwl:'79/71'},
        {title:'3XL',eqwl:'81/76'},
    ]

    

    return(
        <div className="ItemModal_wrapper">
            
            <div className="ItemModal">

                <AiOutlineCloseCircle className="close" onClick={()=>{setModal(false)}}/>
                
                <div className="left">
                <div className="gallery">

                  <div className="main_photo">
                  <IoIosArrowDropleft className="ar ar_left" onClick={()=>imgNum>0?setImgNum(imgNum-1):null}/>
                  <img src={images[imgNum]}/>
                   
                    <IoIosArrowDropright className="ar ar_right" onClick={()=>imgNum<images.length-1?setImgNum(imgNum+1):null}/>

                  </div>

                    <ul className="img_list">
                        {images.map((el,i)=>
                        <li>
                            <img
                            src={el}
                            width={73}
                            height={73}
                            onClick={()=>setImgNum(i)}
                            className={imgNum==i ? 'active' : null}
                            />
                        </li>
                        )}
                    </ul>

                </div>
                </div>

                <div className="right">
                    <p className="title">
                        {item.title}
                    </p>

                    <div className="colors">
                     
                        <ul className="colors_list">
                            {item.colors.map((el,i)=>
                            <li className='color' style={{backgroundColor:el}}>
                                
                            </li>)}
                        </ul>
                    </div>

                    <p className="price">
                       From Price {item.price} $
                    </p>

                    <p className="description">
                        {item.description}
                    </p>

                    <div className="property">
                        
                        <div className="left">
                        <p className="size_title">Размер</p>
                            <ul className="sizes">
                                
                                {item.sizes.map((el,i)=>
                                <li
                                onClick={()=>setSize(el)}
                                className={el==size?'active':null}
                                >
                                    {el}
                                </li>)}        
                            </ul>

                        <button>
                            Заказать
                        </button>
                        </div>

                        <div className="right">
                        <details >
                        <summary >
                           <div className="table_title">
                           <p>Характеристики</p>
                           <IoIosArrowDown size={30}/>
                           </div>
                        </summary>
                       <ul className="prop_list">
                        {item.properries.map((el,i)=>
                        <li>
                        <h3>
                         {el.title}
                        </h3>
                        <p className="value">
                            {el.value}
                        </p>
                        </li>)}
                       </ul>
                        </details> 
                       
                        </div>
                    </div>

                    <ul className="sizes_list">
                        <p className="title_table">Таблица размеров</p>
                        {sizesTable.map((el,i)=>
                       <li>
                        <div className="size">
                            <p className="text_lat">{el.title}</p>
                            <p>{el.eqwl}</p>
                           
                        </div>
                       </li>
                        )}
                    </ul>
                    
                </div>

            </div>
            <div className="overlay" onClick={()=>setModal(false)}>

            </div>
        </div>
        
    )
}