import RuneList from './containers/RuneList';
import Main from './components/Main';
import Experiment from './components/Experiment';
import RuneWordsList from './containers/RuneWordsList';
import FilterList from './containers/FilterList';
import { BrowserRouter as Router, Switch, Route, HashRouter, BrowserRouter } from "react-router-dom";
import FilmsList from './containers/FilmsList';

function App() {

  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route path="/exp">
            <Experiment />
          </Route>

          <Route exact path="/rune">
            <div className="wrapper"></div>
            <div className="content-wrapper">
              <div className="rune__instruction">Выберите руны, которые у вас есть, и снизу появятся слова, которые можно из них составить</div>
              <RuneList />
              <FilterList />
              <RuneWordsList />
            </div>
          </Route>
          <Route exact path="/films">
            <FilmsList />
          </Route>
          <Route exact path="*">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
