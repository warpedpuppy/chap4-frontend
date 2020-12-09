
import React from 'react'
import './App.css';
import EventList from "./components/EventList";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Meet from './components/Meet';
import CitySearch from './components/CitySearch';
import { getEvents, extractLocations } from './api';
class App extends React.Component {
  state = {
    events: [],
    locations: []
  }
  componentDidMount = () => {
    this.mounted = true;
    getEvents()
    .then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    })
    .catch(e =>  {
      console.error(e)
    })
  }
  componentWillUnmount () {
    this.mounted = false;
  }
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        locations: extractLocations(locationEvents)
      });
    })
    .catch(e =>  {
      console.error(e)
    })
  }
  render() {

     return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/meet'} component={Meet} />
        </Switch>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </main>
    </div>
  );
  }
 
}

export default App;
