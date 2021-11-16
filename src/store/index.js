import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';
import cartReducer from './cartSlice';
import runesReducer from './runeSlice';
import runeWordsReducer from './runewordsSlice';
import localStorageReducer from './storageSlice';


export default configureStore({
    reducer: {
        goods: goodsReducer,
        cart: cartReducer,
        runes: runesReducer,
        runeWords: runeWordsReducer,
        localStorage: localStorageReducer
    },
});