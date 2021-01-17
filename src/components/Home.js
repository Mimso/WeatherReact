import React, {Component} from "react";

export default class Home extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-8 offset-2 mt-5 text-center">
                    <div className="card">
                        <div className="card-body">
                            <p>Bienvenue sur l'api meteo automatique par localisation ip.</p>
                            <br />
                            <p class="text-justify">
                                Cette Api récupère la méteo de votre localisation grâce à la localisation de votre adresse ip
                                Pour que cela fonctionne on utilise l'api de
                                &nbsp;<a href="https://ipapi.co/json/" target="_blank"><small>IPApi</small></a>&nbsp;
                                qui nous récupere les informations de localisation d'ip.
                                Ensuite on combine les infos de localisation récuperée pour les transmettre à l'api
                                &nbsp;<a href="https://openweathermap.org/" target="_blank"><small>OpenWeatherMap</small></a>&nbsp;
                                qui permet de récuperer les informations de météo.
                            </p>
                            <p>
                                Vous pouvez avoir accès a ces informations sur les pages&nbsp;
                                <a href="./localisation"><small>Ma localisation</small></a>
                                &nbsp;et&nbsp;
                                <a href="./meteo"><small>Ma météo</small></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}