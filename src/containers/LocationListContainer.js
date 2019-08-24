import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux'; 
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value)) //este key setCity es el que se usa para referencial en el props, el setCity dentro de dispatch no tiene nada que ver
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);