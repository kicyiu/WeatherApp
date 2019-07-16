import React, { Component} from 'react';
import LocationList from './components/locationList';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';

const cities = [
  'Buenos Aires, ar',
  'Hunan, cn',
  'Osaka, jp',
  'Caracas, ve',
  'Madrid, es',
  'San Francisco, us'
]

class App extends Component {

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App"> 
          <LocationList cities={ cities }
            onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
