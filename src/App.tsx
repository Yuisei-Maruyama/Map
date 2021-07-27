import Header from './components/Header/index';
import Maps from './components/Maps/index'
import Art from './components/molecules/Art'
import Cafe from './components/molecules/Cafe'
import Food from './components/molecules/Food'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path={'/'} component={() => <Maps />} />
          <Route path={'/art'} component={() => <Art />} />
          <Route path={'/cafe'} component={() => <Cafe />} />
          <Route path={'/food'} component={() => <Food />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
