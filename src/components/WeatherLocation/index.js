import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from '../../constants/weathers';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';

const data = {
    temperature: "5",
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: "Shenzhen",
            data: data
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
                <WeatherData data={ data }></WeatherData>
                <button onClick={ this.handleUpdateClick }>Actualizar</button>
            </div>
        );
    }
};

export default WeatherLocation;