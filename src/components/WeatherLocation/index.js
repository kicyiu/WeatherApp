import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, FOG } from '../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 1,
    weatherState: RAIN,
    humidity: 5,
    wind: '8 m/s'
}

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: "Shenzhen",
            data: data
        }
    }

    handleUpdateClick = () => {
        console.log("Actualizado");
        this.setState({
            city: "Shanghai",
            data: data2
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={ city } ></Location>
                <WeatherData data={ data }></WeatherData>
                <button onClick={ this.handleUpdateClick }>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;