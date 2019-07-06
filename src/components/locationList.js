import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponents = cities => (
    cities.map( city => <WeatherLocation city={ city } /> )
);

const LocationList = ({ cities }) => (
    <div>
        { strToComponents(cities) }
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}


//prueba cambio de head holaaaaa
//esta es otra linea
//linea nueva
//linea
//linea 2
//linea 3
//linea4
//linea5

export default LocationList;