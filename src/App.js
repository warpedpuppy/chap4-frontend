
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Meet from './components/Meet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>
      <main>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/meet'} component={Meet} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
