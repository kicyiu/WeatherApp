import React, { Component} from 'react';
import { connect} from 'react-redux';  
import LocationList from './components/LocationList';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

const cities = [
  'Buenos Aires, ar',
  'Hunan, cn',
  'Osaka, jp',
  'Caracas, ve',
  'Madrid, es',
  'San Francisco, us'
]

class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectionLocation = city => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);

    this.props.setCity(city);
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

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value)) //este key setCity es el que se usa para referencial en el props, el setCity dentro de dispatch no tiene nada que ver
});

export default connect(null, mapDispatchToPropsActions)(App);
