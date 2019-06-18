import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import { api_weather } from './../../constants/api_url';


class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: "Shenzhen",
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

export default WeatherLocation;