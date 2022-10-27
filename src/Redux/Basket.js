import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name:'basket',
    initialState:{items:[]},

    reducers:
    {
        addItem:(state,action)=>{
            let item = {cout:5}
            Object.assign(item,action.payload)
            state.items.push(item)
/*             console.log(state.items) */
        },
        deleteItem:(state,action)=>{
            let arr = state.items
            for (let i=0;i<arr.length;i++){
                if(arr[i].id==action.payload.id){
                    state.items.splice(i,1)
                    break
                }
            }
       
       
        },

        plusItem:(state,action)=>{
            state.items[action.payload].cout++
 
        },

        minusItem:(state,action)=>{
            if (state.items[action.payload].cout>5 ){
                state.items[action.payload].cout--
            }
        },
        
        clearBasket:(state,action)=>{
            state.items=[]
        }

        
        
    }
})


export const {addItem,deleteItem,plusItem,minusItem,clearBasket} = BasketSlice.actions
export default BasketSlice.reducer