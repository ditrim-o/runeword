import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectRunes,

} from '../store/runeSlice';
import {
    activateWord,
    selectRuneWords,
} from '../store/runewordsSlice';
import {
    changeActiveRunes,
    selectLocalStorage,
    showRecept
} from '../store/storageSlice';
import Rune from '../components/Rune';



function RunesList() {
    const runes = useSelector(selectRunes);
    const runeWords = useSelector(selectRuneWords);
    const storage = useSelector(selectLocalStorage);

    const dispatch = useDispatch();

    let tempRuneArr = [];
    let displayRecepts = storage[0].settings.showRecept
    let activeRunes = storage[0]['actRunes']




    useEffect(() => {

        // Добавляем активные рунные слова
        loadActive();

    }, []);

    const loadActive = () => {
        addRuneWords(storage[0]['actRunes'])
    }


    const checkActive = (st, i, arrActive) => {
        for (let k = 0; k < st.runeID.length; k++) {
            if (arrActive.indexOf(String(st.runeID[k])) === -1) {
                return false;
            }
        }
        tempRuneArr.push(i);

    }

    // Обработчик клика по руне
    let clickHandler = (event) => {
        event.preventDefault();
        if (event.target.closest('.rune-block')) {
            let t = event.target.closest('.rune-block');
            addActive(t.getAttribute('data-id'))
        }
        else {
            return true;
        }

    }

    // Добавляем активные руны в массив
    let addActive = (activeRunesID) => {

        let id = activeRunesID;
        let tempArr = [...activeRunes];
        if (tempArr.indexOf(id) === -1) {
            tempArr.push(id)
        }
        else {
            tempArr.splice(tempArr.indexOf(id), 1);
        }
        dispatch(changeActiveRunes(tempArr))
        addRuneWords(tempArr);



    }

    // ищем активные рунные слова
    const addRuneWords = (activeR = activeRunes) => {

        tempRuneArr = [];
        runeWords.forEach((item, i) => {
            checkActive(item, i, activeR)
        })
        dispatch(activateWord(tempRuneArr));
    }
    // рассчитываем изображения для вывода в рецепт руны
    const calcImg = (id) => {
        let arr = [];

        if (runes[id].recept.countPred > 0) {
            for (let i = 0; i < runes[id].recept.countPred; i++) {
                arr.push(runes[id - 1].img)
            }
            if (runes[id].recept.dop) {
                arr.push(runes[id].recept.img)
            }
        }
        return arr;

    }

    const checkboxHandler = (e) => {
        dispatch(showRecept(e.target.checked))

    }
    const resetAll = () => {
        dispatch(changeActiveRunes([]))
        addRuneWords([]);

    }
    const chooseAll = () => {
        let temp = [];

        runes.forEach((item, i) => {
            temp.push(String(i));
        })
        dispatch(changeActiveRunes(temp))
        addRuneWords(temp);
    }

    return (
        <>

            <div className="rune__settings">
                <div className="rune__settings-item">
                    <input type="checkbox" className="rune__checkbox" name="hover" id="hover" onChange={checkboxHandler} checked={displayRecepts} />
                    <label htmlFor="hover" className="rune__checkbox-label">Отображение рецептов для рун</label>
                </div>
                <div className="rune__settings-item buttons">
                    <button className="rune__settings-btn rune__button" onClick={resetAll}>Сбросить всё</button>
                    <button className="rune__settings-btn rune__button" onClick={chooseAll}>Выбрать всё</button>
                </div>
            </div>
            <div className="runes-field" onClick={clickHandler}>
                {runes.map((item, i) => <Rune
                    title={item.nameEn}
                    nameRus={item.nameRus}
                    active={activeRunes.indexOf(String(i)) !== -1 ? 'active' : ''}
                    image={item.img}
                    articul={item.id}
                    key={item.id}
                    id={item.id}
                    receptRune={item.recept.countPred}
                    receptGem={item.recept.dop ? '+' + item.recept.name : ''}
                    receptName={i !== 0 ? runes[i - 1].nameRus : ''}
                    receptImg={calcImg(item.id)}
                    receptClass={displayRecepts ? '' : 'hidden'}
                    weapon={item.effects.weapon}
                    armor={item.effects.armor}
                    shield={item.effects.shield}
                    level={item.effects.level}

                />)}
            </div>
        </>
    );

}

export default RunesList;


