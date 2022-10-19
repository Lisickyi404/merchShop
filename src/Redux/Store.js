import { configureStore } from "@reduxjs/toolkit";

import items from './Basket.js'


export const store = configureStore({
    reducer:{
        basket:items
    },
});