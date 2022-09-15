import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
export default function Main() {
    return (
        <>


            <div className="main-wrapper">
                <img src={require('../img/site/logo.svg').default} alt="" className="main__logo" />
                <h1 className="main__header">Ditrim Technologies</h1>
                <div className="main__links">
                    <Link className="button" to="/rune">DIABLO II RUNEWORDS FINDER</Link>
                    <Link className="button" to="/films">FILMS</Link>
                </div>

            </div>
        </>
    )
}