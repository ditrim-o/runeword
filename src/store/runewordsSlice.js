import { createSlice } from '@reduxjs/toolkit';
import runeWords from '../data/runeWords.json';

export const runeSlice = createSlice({
    name: 'runeWords',
    initialState: {
        runeWords: runeWords,
        activeWords: []
    },
    reducers: {
        activateWord: (state, data) => {
            let arr = data.payload;
            state.activeWords = [...arr];
        },
    }
});

export const { activateWord } = runeSlice.actions;
export const selectRuneWords = state => state.runeWords.runeWords;
export const selectActiveWords = state => state.runeWords.activeWords;
export default runeSlice.reducer;