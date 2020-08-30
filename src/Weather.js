import { Input, Button } from "reactstrap";
import React from 'react' ;
// import './Weather.css';
import WeatherData from './WeatherData' ;

class Weather extends React.Component {

    constructor(props) {
        // Permet de définir la globalité de la variable ce qui permet d'accéder dans l'ensemble de ma classe
        super(props) ;

        // permet de stocker les changements d'état (équivalent de useState)
        // C'est une variable que j'utiliserai en objet (afin de pouvoir y stocker plusieurs choses)
        // Je rajoute la clé "city" que je définis à rien (une string vide)

        this.state = {
            city :'',
            renduHTML: '',
            weathercity: '',
            weathertemp: '',
        };

        this.submitForm = this.submitForm.bind(this);
        this.cityChange = this.cityChange.bind(this);

        // Je dois définir "this.state.city" qui contiendra la valeur de la saisie d'utilisateur

    }

    // Fonction city Change
    cityChange(event) {
        event.preventDefault();

        // this.setState() est une fonction disponible dans une classe React qui va me permettre d'assigner une valeur à une clé de this.state
        // event.target.value puisque j'agis sur mon input
        this.setState({city : event.target.value});
    }

    // Fonction submit form
    // Elle s'éxécute à la soumission du formulaire
    submitForm(event){
    // event.preventDefault () permet de bloquer le comportement d'un formulaire pour que le traitement de celui-ci s'effectue dans ma fonction
    event.preventDefault();

    // this.setState() est une fonction dispo dans une classe React qui va me permettre d'assigner une valeur à une clé de this.state
    this.setState({city: event.target.querySelector('[name="search_city"]').value});
    // this.setState({city: 'Toulouse'});

    // event => action effectuée, ici le submit
    // event.target => le formulaire (complet) qui a été soumis (balise form)
    // event.target.querySelector () => va permettre de sélectionner un élément via son sélecteur (class css, id, attribut name, etc.)
    // event.target.querySelector([name="serach_city"]) => sélecteur choisi
    // event.target.querySelector([name="serach_city"]).value => récupère la valeur saisie dans le champ

    // console.log('Queryselector:' +event.target.querySelector('[name="search_city"]').value);
    // console.log(this.state) ;

    // Fait appel à la fonction getWeatherAPI (), qui elle-meme fait appel à 
    // Fait référence à ce que l'utilisateur a saisi dans son input
    this.getWeather(this.state.city);
}

    // fonction d'appel à l'api
    getWeatherAPI(cityDansLaFonction){

        // Une URL n'accepte que des caractères UTF-8 accepté dans une Uniform Resource Identifier (URI)
        // En utilisant la fonction encodeURIComponent() cela me permet de convertir les espaces en caractères autorisés pour les URL
        // Exemple : ' ' deviendra '%20'
        let urlAPI = "https://api.openweathermap.org/data/2.5/find?appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&q="+encodeURIComponent(cityDansLaFonction);

        fetch(urlAPI)
        .then(function(resultatJSON){
            return resultatJSON.json();
        })
        .then(function(myJson){
            if(myJson.cod == 200){
                console.log(myJson);

                // Info de l'api .. je créé la variable donnees_meteo pour me simplifier la vie
                let donnees_meteo = myJson.list[0];

                this.setState({
                    weathercity: donnees_meteo.name,
                    weathertemp : donnees_meteo.temp
                });
               
                // let myHTML;

                // myHTML = '<h1>'+donnees_meteo.name +'<h1>';
                // myHTML += '<h2> <img src="icons/' +donnees_meteo.weather[0].icon +'.png" id="iconsmeteo" alt="icon meteo"></h2>' ;
                // //<img src="icons/01d.png" />
                // myHTML  += '<h2>' +donnees_meteo.weather[0].description +'. '  +Math.round(donnees_meteo.main.temp) + ' °C</h2>' ;
                // myHTML += '<h2 className="maxtemp"> Max <i class="fas fa-temperature-high"></i> : ' +Math.round(donnees_meteo.main.temp_max) +' °C</h2>' ;
                // myHTML += '<h2 class="mintemp"> Min <i class="fas fa-temperature-low"></i> : ' +Math.round(donnees_meteo.main.temp_min) +' °C</h2>' ;
                // myHTML += '<h2> Humidité <i class="fas fa-tint"></i> : ' +donnees_meteo.main.humidity +'% </h2>' ;
                
                // document.getElementById('meteo').innerHTML = myHTML  ;
                // this.setState({renduHTML : myHTML})

            } else if (myJson.cod == 401){
                console.log(myJson.message);
            }
        })
    }


    render () {
        return (
            <div>
                {/* Permet de faire appel à la fonction submitForm en liant l'état de l'application (à l'aide du bind) à l'ensemble de mon script (mon composant)*/}
                <form onSubmit={this.submitForm}>
                    <label>Saisissez une ville</label>
                    <Input placeholder="Lyon..." name="search_city" id="maVille" onChange={this.cityChange} />
                    <Button type="submit">Go</Button>
                </form>

                <WeatherData weathercity={this.state.weathercity} weathertemp={this.state.weathertemp} />
                {/* <div id='meteo' dangerouslySetInnerHTML={{ __html: this.state.renduHTMLHTML}}></div> */}

            </div>
        )
    }
}


// Cette ligne permet d'exporter la class et de pouvoir l'importer ailleurs.
// Attention, le nom doit etre le meme que celui de la classe
export default Weather;