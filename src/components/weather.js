import React from 'react';

const Weather = props => (
    <div>
        {
            props.weatherState.city &&
            <dl>
                <dt>Location:</dt>
                <dd>{props.weatherState.city}, {props.weatherState.country}</dd>
                <dt>Temperature:</dt>
                <dd>{props.weatherState.temp}</dd>
                <dt>Pressure:</dt>
                <dd>{props.weatherState.pressure}</dd>
                <dt>Sunset:</dt>
                <dd>{props.weatherState.sunset}</dd>
            </dl>
        }
        <div className="w-error">{props.weatherState.error}</div>
    </div>
);

export default Weather;