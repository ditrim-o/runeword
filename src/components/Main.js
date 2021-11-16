import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
export default function Main() {
    return (
        <>


            <div className="main-wrapper">
                <img src="/img/site/logo.svg" alt="" className="main__logo" />
                <h1 className="main__header">Ditrim Technologies</h1>
                <Link className="button" to="/rune">DIABLO II RUNEWORDS FINDER</Link>
            </div>
        </>
    )
}