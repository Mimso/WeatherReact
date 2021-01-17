import React, {Component} from "react";
import moment from "moment";


export default class WeatherData extends Component {

    render() {

        let data = this.props.data;

        moment.locale('fr');

        let date = new Date();
        let weekday = new Array(7);
        weekday[0] = "Dimanche";
        weekday[1] = "Lundi";
        weekday[2] = "Mardi";
        weekday[3] = "Mercredi";
        weekday[4] = "Jeudi";
        weekday[5] = "Vendredi";
        weekday[6] = "Samedi";

        return (
            <div className="container-fluid">
                <div className="col-md-8 offset-2 mt-5">
                    {data.loadingIpData ? <img src="loading.gif"/> :
                        <div className="weather">
                            <div className="w-container">
                                <div className="weather-side">
                                    <div className="weather-gradient"></div>
                                    <div className="date-container">
                                        <h2 className="date-dayname">
                                            {weekday[date.getDay()]}
                                        </h2>
                                        <span className="date-day">{moment().format('LL')}</span>
                                        <i className="location-icon" data-feather="map-pin"></i>
                                        <span className="location">Paris, FR</span>
                                    </div>
                                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                                        <h1 className="weather-temp">{ Number((data.weatherData.main.temp).toFixed(1)) }°C</h1>
                                        <h3 className="weather-desc">{data.weatherData.weather[0].description}</h3>
                                    </div>
                                </div>
                                <div className="info-side">
                                    <div className="today-info-container">
                                        <div className="today-info">
                                            <div className="precipitation"><span
                                                className="title">PRESSION : </span><span
                                                className="value">{data.weatherData.main.pressure}</span>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="humidity"><span
                                                className="title">HUMIDITÉ : </span><span
                                                className="value">{data.weatherData.main.humidity} %</span>
                                                <div className="clear"></div>
                                            </div>
                                            <div className="wind"><span className="title">VENT : </span><span
                                                className="value">{data.weatherData.wind.speed} km/h</span>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}