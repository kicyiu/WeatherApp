import React, { Component} from 'react';
import LocationList from './components/LocationList';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { AppBar } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';
import { createStore } from 'redux';

const cities = [
  'Buenos Aires, ar',
  'Hunan, cn',
  'Osaka, jp',
  'Caracas, ve',
  'Madrid, es',
  'San Francisco, us'
]

const store = createStore(() => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const setCity = value => ({ type: 'setCity', value});

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);

    
    store.dispatch(setCity(city));
  }

  render() {
    console.log("init app render");
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h5' color='inherit'>
                Weather App 
              </Typography>
            </Toolbar>
          </AppBar>
          
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city &&
                  <ForecastExtended city={city}></ForecastExtended>   
                }
                
              </div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
