import './ListStyle.scss'
import ItemModal from '../ItemModal/ItemModal'

import Item from '../Item/Item'

import React from 'react'

export default function ItemsList(){

    const [modal,setModal] = React.useState(false)

    return(
        <div className="ItemsList">
            <Item 
            setModal={setModal}
            />

           {Object.keys(modal).length!=0 ?

           <ItemModal
           setModal={setModal}
           item={modal}
           
           />
           : null}
            
        </div>
    )
}