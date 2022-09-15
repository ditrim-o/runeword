import { useEffect, useState } from "react"


const Film = ({ name, link, id, watched, changeWatch }) => {

    const check = require("../img/icons/check.svg").default;
    const unCheck = require("../img/icons/uncheck2.svg").default

    const checkClass = (id) => {
        if (id % 2 == 0) {
            return "film_odd"
        } else {
            return "film_even"
        }
    }


    const watchedHandler = (e) => {
        changeWatch();
    }
    return <>
        <div className={`film ${watched ? "film_is-watched" : ""}`}>
            <a className="film__btn" href={link} target="_blank" rel="noopener">
                <img src={require("../img/films/kinop.png").default} alt="" className="film__icon" />
                <p className="film__name">{name}</p>

            </a>
            <button className="film_watched" onClick={watchedHandler}>
                <img src={!watched ? check : unCheck} alt="" className="film__check-icon" />
            </button>
        </div>
    </>
}

export default Film