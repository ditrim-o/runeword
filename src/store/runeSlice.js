import { createSlice } from '@reduxjs/toolkit';
import runeArr from '../data/runes.json';

export const runeSlice = createSlice({
    name: 'runes',
    initialState: {
        runes: runeArr,

    },
    reducers: {
        activate: (state, data) => {
            let id = data.payload;
            if (state.runes[id]['active'] !== undefined) {
                state.runes[id]['active'] = !state.runes[id]['active'];
            }
            else {
                state.runes[id]['active'] = true;
            }

        },

    }
});

export const { activate } = runeSlice.actions;
export const selectRunes = state => state.runes.runes;
export default runeSlice.reducer;