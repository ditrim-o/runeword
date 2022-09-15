import films from '../data/films'
import Film from '../components/Film'
import { useEffect } from 'react';
import { useState } from 'react';

const FilmsList = () => {
    const [watchedFilms, setWatchedFilms] = useState({});
    const [user, setUser] = useState('alena')

    useEffect(() => {
        const data = {
            type: "loading",
            length: films.length,
            name: user
        }
        const response = fetch('./php/films.php', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(data => data.json())
            .then(data => {
                setWatchedFilms(data);
            });
    }, [user])

    const checkWatch = (id) => {
        if (watchedFilms[id] == 1) {
            return true
        } else {
            return false
        }
    }

    const changeWatch = (id) => {
        const status = checkWatch(id) ? 0 : 1;

        const data = {
            type: "change",
            id: id,
            name: user,
            status: status,
            length: films.length,
        }

        const response = fetch('./php/films.php', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(data => data.json())
            .then(data => {
                setWatchedFilms(data);
            });
    }

    return <>
        <div className="films">
            <div className="films__list">

                <p className="films__list-header">
                    фильмы
                </p>
                <div className="films__buttons">
                    <button className={`films__btn films__btn_alena ${user == 'alena' ? 'active' : ""}`} onClick={() => { setUser('alena') }}>
                        Алёна
                        {/* <img src={require("../img/icons/flower.svg").default} alt="" className="films__flower" /> */}
                    </button>
                    <button className={`films__btn ${user == 'dima' ? 'active' : ""}`} onClick={() => { setUser('dima') }}>Дима</button>
                </div>
                {films.sort((a, b) => (checkWatch(a.id) ? 1 : -1)).map((item, i) => {


                    return (
                        <Film
                            name={item.name}
                            link={item.link}
                            id={item.id}
                            key={item.id}
                            watched={checkWatch(item.id)}
                            changeWatch={() => { changeWatch(item.id) }}
                        />
                    )
                })}
            </div>
            <a href="/" className="films__main">Главная страница</a>
        </div>
    </>
}

export default FilmsList