import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectLocalStorage,
    favoriteOn,
    addFilter,
    addFilterEquip

} from '../store/storageSlice';



export default function FilterList() {

    const dispatch = useDispatch();

    const storage = useSelector(selectLocalStorage);

    let favOn = storage[0].settings.favorites



    const favHandler = (e) => {
        dispatch(favoriteOn(e.target.checked))
    }

    const filterHandler = (e) => {

        if (!storage[0]["filter-equip"]) {
            dispatch(addFilterEquip())
            dispatch(addFilter([e.target.value, e.target.checked]))
        }
        else {
            dispatch(addFilter([e.target.value, e.target.checked]))
        }

    }

    const checkChecked = (type) => {
        if (storage[0]['filter-equip'][type]['active']) {
            return true;
        }
        else {
            return false
        }
    }



    return (

        <div className="runeword__settings">
            <div className="rune__settings-item">
                <input type="checkbox" className="rune__checkbox" name="favorite" id="favorite" onChange={favHandler} checked={favOn} />
                <label htmlFor="favorite" className="rune__settings-label">Отображать только избранное</label>
            </div>
            <ul className="rune__filter-buttons">
                <li className="rune__filter-buttons-item">
                    <input type="checkbox" name="weapon" id="weapon" className="rune__filter-btn-ch" value="weapon" checked={checkChecked("weapon")} onChange={filterHandler} />
                    <label htmlFor="weapon" className="rune__filter-btn-label">Оружие</label>
                </li>
                <li className="rune__filter-buttons-item">
                    <input type="checkbox" name="armor" id="armor" value="armor" className="rune__filter-btn-ch" checked={checkChecked("armor")} onChange={filterHandler} />
                    <label htmlFor="armor" className="rune__filter-btn-label">Броня</label>
                </li>
                <li className="rune__filter-buttons-item">
                    <input type="checkbox" name="helmets" id="helmets" value="helmet" className="rune__filter-btn-ch" checked={checkChecked("helmet")} onChange={filterHandler} />
                    <label htmlFor="helmets" className="rune__filter-btn-label">Шлемы</label>
                </li>
                <li className="rune__filter-buttons-item">
                    <input type="checkbox" name="shields" id="shields" value="shield" className="rune__filter-btn-ch" checked={checkChecked("shield")} onChange={filterHandler} />
                    <label htmlFor="shields" className="rune__filter-btn-label">Щиты</label>
                </li>
            </ul>
        </div>
    )
}