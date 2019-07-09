import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getWeatherUrlByCity'
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';


class WeatherLocation extends Component {
    
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }    
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            //console.log(resolve.json());
            return resolve.json();
        }).then( data => {
            console.log("handleUpdateClick result");
            const newWeather = transformWeather(data);
            console.log(newWeather);
           // debugger;
            this.setState({
                data: newWeather
            })
        });

        
    }

    render() {
        console.log("init render");
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={ city } ></Location>
                {data? <WeatherData data={ data }></WeatherData> : <CircularProgress size={50}/>}
            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,

}

export default WeatherLocation;