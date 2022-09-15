import React from 'react';


function Rune(props) {
    return (
        <div className="rune-block-wrapper">
            <div className={"rune-block " + props.active} data-id={props.id} >
                <img src={props.image.default} alt="" />
                <div className="rune-name-container">
                    <p className="rune-name-ru">{props.nameRus}</p>
                    <p className="rune-name-en">({props.title})</p>
                </div>
            </div>
            <div className={props.id === 0 || props.receptClass ? "rune-info hidden" : "rune-info"}>
                {/* <p className="rune-made">Изготовление:</p> */}
                <p className="rune-count">{props.receptRune} руны {props.receptName}</p>
                <p className={props.receptGem !== '' ? "rune-gem" : 'hidden'}>{props.receptGem}</p>
                <ul className="rune-recept-pic">
                    {props.receptImg.map((item, i) => <li key={i}><img src={item.default} alt="руна" /></li>)}
                </ul>

            </div>
            <div className="rune-info left">
                <p className="rune-weapon">
                    <img className="rune-icon" src={require("../img/icons/weapons.svg").default} alt="icon" /><b>Оружие</b> {props.weapon}</p>
                <p className="rune-helmet">
                    <img className="rune-icon" src={require("../img/icons/helmet.svg").default} alt="icon" /><b>Шлем</b> {props.armor}</p>
                <p className="rune-armor">
                    <img className="rune-icon" src={require("../img/icons/armor.svg").default} alt="icon" /><b>Броня</b> {props.armor}</p>
                <p className="rune-shield">
                    <img className="rune-icon" src={require("../img/icons/shield.svg").default} alt="icon" /><b>Щит</b> {props.shield}</p>
                <p className="rune-level">
                    <img className="rune-icon" src={require("../img/icons/level-up.svg").default} alt="icon" /><b>Необходимый уровень</b> {props.level}</p>
            </div>
        </div>
    );
}

export default Rune;