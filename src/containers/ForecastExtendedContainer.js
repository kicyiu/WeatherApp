import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedCotainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended city = { this.props.city }/>
            
        );
    }
};

ForecastExtendedCotainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city }) //forma simplificada con destructuring
//const mapStateToProps = state => ({ city: state.city })

export default connect(mapStateToProps, null)(ForecastExtendedCotainer);
