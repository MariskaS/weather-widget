import React from 'react';

import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = '0cb915ee6103e75655c750045952b271';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined
    };

    gettingWeather = async (e) => {
        e.preventDefault();
        const CITY = e.target.elements.city.value;

        if(!!CITY) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            let sunset = data.sys.sunset;
            let date = new Date();
            date.setTime(sunset);
            const SUNSET_DATE = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: SUNSET_DATE,
                error: ''
            });
        } else {
            this.setState({
                ...this.state,
                error: 'Enter the name of the city'
            });
        }

    };

    render() {
        return (
            <main className="w-main">
                <div className="w-widget">
                    <div className="w-widget__info">
                        <Info/>
                    </div>
                    <div className="w-widget__content">
                        <Form weatherMethod={this.gettingWeather}/>
                        <Weather weatherState={this.state}/>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;