import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectRuneWords,
    selectActiveWords

} from '../store/runewordsSlice';
import {
    selectRunes

} from '../store/runeSlice';

import {
    addFavorite,
    removeFavorite,
    selectLocalStorage,
    favoriteOn

} from '../store/storageSlice';

import RuneWords from '../components/RuneWords';


function RunesWordsList() {

    const dispatch = useDispatch();

    const runeWords = useSelector(selectRuneWords);
    const activeWords = useSelector(selectActiveWords);
    const storage = useSelector(selectLocalStorage);
    const runes = useSelector(selectRunes);

    let fav = storage[0].favorites;
    let favOn = storage[0].settings.favorites

    let [filter, setFilter] = useState([]);


    const makePic = (idArr) => {
        let imgarr = [];

        idArr.forEach(item => {
            imgarr.push(runes[item].img);
        })
        return imgarr;
    }

    const makeNames = (idArr) => {
        let namesArr = [];

        idArr.forEach(item => {
            namesArr.push(runes[item].nameRus);
        })
        return namesArr;
    }

    const clickHandler = (e) => {
        if (e.target.closest('.runeword__favorites-btn')) {
            const id = e.target.closest('.runeword__favorites').getAttribute('data-id');
            if (e.target.closest('.runeword__favorites-add')) {
                dispatch(addFavorite(id))
            }
            if (e.target.closest('.runeword__favorites-remove')) {
                dispatch(removeFavorite(id))
            }

        }
    }
    const checkFilter = (id) => {
        const equip = ['armor', 'weapon', 'helmet', 'shield'];
        if (!storage[0]['filter-equip']['filter']) {
            return true;

        }
        else {
            for (let i = 0; i < equip.length; i++) {
                if (storage[0]['filter-equip'][equip[i]]['active'] && storage[0]['filter-equip'][equip[i]]['array'].indexOf(Number(id)) !== -1) {
                    return true;
                }
            }
        }
        return false;

    }
    return (
        <div >

            <div className="runewords__wrapper" onClick={clickHandler}>

                {activeWords.map((item, i) => <RuneWords
                    nameR={runeWords[item].runewordRus}
                    nameE={runeWords[item].runeword}
                    order={runeWords[item].runewordRunes}
                    picturies={makePic(runeWords[item].runeID)}
                    receptNames={makeNames(runeWords[item].runeID)}
                    level={runeWords[item].level}
                    for={runeWords[item].for}
                    abilities={runeWords[item].abilities}
                    key={i}
                    id={item}
                    favorite={fav.indexOf(String(item)) === -1 ? false : true}
                    favoriteOn={favOn}
                    filter={checkFilter(item)}

                />)}
            </div>




        </div>
    );

}

export default RunesWordsList;