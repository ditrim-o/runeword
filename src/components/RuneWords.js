import React from 'react';
import { useEffect } from 'react';

function RuneWord(props) {

    // const img = "../img/tal.png"
    // const tal = require(`"${img}"`).default;
    // console.log(tal);

    // useEffect(() => {
    //     props.picturies.map(item => {
    //         const i = require(item).default;
    //         console.log(i);
    //     })
    // }, [])

    const getImg = (src) => {
        //console.log(require("" + src));
        return ""
    }

    const show = (fav, pr) => {
        if (fav && pr) {
            return true;
        }
        else if (!fav) {
            return true;
        }
        else {
            return false;
        }
    }
    return (
        <div className={show(props.favoriteOn, props.favorite) && props.filter ? "runeword-block-wrapper" : "hidden"}>
            <div className="runeword__favorites" data-id={props.id}>
                <div className={!props.favorite ? "runeword__favorites-btn runeword__favorites-add" : "hidden"}>
                    <img src={require("../img/icons/add-fav.svg").default} alt="" title="Добавить в избранное" />
                </div>
                <div className={props.favorite ? "runeword__favorites-btn runeword__favorites-remove" : "hidden"}>
                    <img src={require('../img/icons/remove-fav.svg').default} alt="" title="Удалить из избранного" />
                </div>
            </div>
            <div className="runeword__left">
                <div className="runeword__name-wrapper">
                    <div className="runeword__name-top">
                        <p className="runeword__nameR">{props.nameR} <span className="runeword__nameE">({props.nameE})</span></p>
                        <p className="runeword__name">
                            <span className="runeword__name-title">Рунное слово:</span>
                            <span className="runeword__name-text">{props.order}</span></p>
                    </div>
                </div>
                <ul className="runeword__recept">
                    {props.picturies.map((item, i) =>
                        <li className="runeword__recept-item" key={i}>
                            <img src={item.default} alt="" className="runeword__recept-img" />
                            <p className="runeword__recept-name">{props.receptNames[i]}</p>
                        </li>)}
                </ul>
                <div className="runeword__equip">
                    <p className="runeword__equip-header">Заготовки</p>
                    <ul className="runeword__equip-list">
                        {props.for.map((item, i) => <li className="runeword__equip-item" key={i}>{item}</li>)}
                    </ul>
                </div>

            </div>
            <div className="runeword__right">

                <p className="runeword__right-header">Свойства</p>
                <ul className="runeword__abilities-list">
                    {props.abilities.map((item, i) => <li className={(item === 'Щиты' || item === 'Оружие' || item === 'Мечи' || item === 'Броня') ? 'runeword__abilities-item-custom' : 'runeword__abilities-item'} key={i}>{item}</li>)}
                </ul>
                <div className="runeword__level">
                    <p className="runeword__level-title">Уровень героя</p>
                    <p className="runeword__level-text">{props.level}</p>
                </div>
            </div>

        </div>
    );
}

export default RuneWord;

