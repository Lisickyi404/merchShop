import React from "react"
import './Catalog.scss'
import Product from "./Product"

import { categories } from "../../Pages/MakingPage/categories"
import { infoText } from "./InfoText"

import { Link } from "react-router-dom"

export default function Catalog(){


    return(
        <div className="Catalog">
            <div className="catalog_title">
                <h3>Мы можем пошить</h3>
                <p>Товары, которые наиболее часто заказывают наши клиенты</p>
            </div>

            <ul className="product_list">
                {categories.map((el,i)=>
                <Link to={el.id}>
                 <li>
                    <div className="product">
                        <img src={el.img}/>
                        <h4>{el.title}</h4>
                    </div>  
                </li>
                </Link>
               
                )}
            </ul>

            <ul className="info_list">
                {infoText.map((el,i)=>
                <li>
                    <div className="info_tab">
                        <div className="info_title">
                            {el.title}
                        </div>

                        <div className="info_text">
                            {el.text}
                        </div>

                    </div>
                </li>)}
            </ul>
        </div>
    )
}