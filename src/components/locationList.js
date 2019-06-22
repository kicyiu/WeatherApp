import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Hunan, cn"/>
        <WeatherLocation city="Caracas, ven"/>
        <WeatherLocation city="Buenos Aires, ar"/>
    </div>
);

export default LocationList;