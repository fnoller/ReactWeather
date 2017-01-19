import React from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import OpenWeatherMap from '../../api/openWeatherMap';

class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };
    }

    handleSearch(location) {

        this.setState({
            isLoading: true,
            location:'',temp:0
        });

        OpenWeatherMap.getTemp(location).then((temp)=>{
            this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (errorMessage) =>{
            this.setState({
                isLoading: false
            });

            alert(errorMessage);
        });
    }

    render() {

        let {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <span>Loading</span>
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />
            }

        }

        return (
            <div>
                <h1><i className="fa fa-cog fa-spin fa-fw"></i>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch.bind(this)} />
                {renderMessage()}
            </div>
        );
    }
}

export default Weather;
