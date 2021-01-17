import React, {Component} from "react";
import WeatherData from "../components/WeatherData";

export default class FetchWeatherDataApi extends Component {

    api_key = '4b0067ed955c68d4ae891b7de9c81776'
    units   = 'metric'
    lang    = 'fr'

    state = {
        loadingWeather: true,
        loadingIpData: true,
        ipData: null,
        weatherData: null,
    };

    async componentDidMount() {

        let _url = "https://ipapi.co/json/";
        let _response = await fetch(_url);
        let _data = await _response.json();

        let url = "http://api.openweathermap.org/data/2.5/weather?lang="+ this.lang + "&units=" + this.units + "&q=" + _data.city + "&appid=" + this.api_key;
        let response = await fetch(url);
        let data = await response.json();

        this.setState({
            ipData: _data,
            loadingIpData: false,
            weatherData: data,
            loadingWeather: false,
        });
    }

    render() {
        return <WeatherData data={this.state} />
    }
}