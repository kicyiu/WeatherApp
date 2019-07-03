import React, { Component} from 'react';
import LocationList from './components/locationList';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Hunan, cn',
  'Osaka, jp',
  'Caracas, ve',
  'Madrid, es',
  'San Francisco, us'
]

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <LocationList cities={ cities }></LocationList>
      </div>
    );
  }
}

export default App;
