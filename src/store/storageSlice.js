import { createSlice } from '@reduxjs/toolkit';
import initStore from '../data/initStorage.json';


const initStorage = initStore
const storage = (localStorage.getItem('runeConfig')) ? JSON.parse(localStorage.getItem('runeConfig')) : initStorage;

export const storageSlice = createSlice({
    name: 'locasStorage',
    initialState: {
        localStorage: storage,
    },
    reducers: {
        changeActiveRunes: (state, data) => {
            let arr = data.payload;
            state.localStorage[0].actRunes = arr;
            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));
        },
        showRecept: (state, data) => {
            let bool = data.payload;
            state.localStorage[0]['settings']['showRecept'] = bool;
            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));
        },
        addFavorite: (state, data) => {
            const id = data.payload;
            state.localStorage[0]['favorites'].push(id);
            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));

        },
        removeFavorite: (state, data) => {
            const id = data.payload;
            const sn = state.localStorage[0]['favorites'].indexOf(id);
            state.localStorage[0]['favorites'].splice(sn, 1);
            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));
        },
        favoriteOn: (state, data) => {
            const bool = data.payload;
            state.localStorage[0]['settings']['favorites'] = bool;
            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));
        },
        addFilter: (state, data) => {
            const val = data.payload;
            state.localStorage[0]['filter-equip'][val[0]]['active'] = val[1]
            const equip = ['armor', 'weapon', 'helmet', 'shield'];
            let filter = false;
            equip.forEach(el => {
                if (state.localStorage[0]['filter-equip'][el]['active']) {
                    filter = true;
                    return true
                }
            });
            state.localStorage[0]['filter-equip']['filter'] = filter;

            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));

        },
        addFilterEquip: (state, data) => {
            state.localStorage[0]['filter-equip'] = initStorage[0]['filter-equip'];
            localStorage.setItem('runeConfig', JSON.stringify(state.localStorage));
        }
    }
});

export const { changeActiveRunes, showRecept, addFavorite, removeFavorite, favoriteOn, addFilter, addFilterEquip } = storageSlice.actions;
export const selectLocalStorage = state => state.localStorage.localStorage;
export default storageSlice.reducer;