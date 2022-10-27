import React from "react"
import './MakingPage.scss'
import Catalog  from "../../Components/Catalog/Catalog"
import { categories } from "./categories"

import MakingHeader from "./MakingHeader"

export default function MakingPage(){

    
    return(
        <div className="MakingPage_wrapper">
            <div className="MakingPage">
            <MakingHeader/>
            
            <Catalog/>
        </div>
        </div>
    )
}