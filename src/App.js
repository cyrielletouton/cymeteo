import React, { useState} from 'react';
import './App.css';
import WeatherIcon from 'react-icons-weather';
import { Button, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  toggleNavbar,
  collapsed,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import ReactDOM from 'react-dom';
import DateActuelle from './componentDate.js';
import CustomNavBar from './CustomNavBar';
import Footer from './Footer';
import ImageBas from './bas.jpg';

ReactDOM.render(<DateActuelle />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('root'));


function App() {

    let getLatitude;
    let getLongitude;
    let myHTML;
    let myHTML2;
    let myHTML3;
    let myHTML4;
    let myHTML5;
    let myHTMLnom;
    
    // Permet de récupérer la localisation
    navigator.geolocation.watchPosition(showLatLng, onError, {enableHighAccuracy: true, timeout: 30000}) ;

    function showLatLng(position){
        getLatitude = position.coords.latitude;
        getLongitude = position.coords.longitude;
    } ;

    function onError(error){
      alert('code:' + error.code + '\n' +
            'message:' + error.message + '\n') ;
    } ;

    // <CallApi />

    function callApi(event) {

        let urlAPI ;
        let city;

        // Je bloque l'action par défaut du formulaire pour éviter qu'il recherge ma page et passe dans mon script actuel.
        event.preventDefault() ;

        // Si click sur le bouton de recherche, alors je reprends la valeur du champs city
        if(event.currentTarget.getAttribute('name') == 'search') {
            city = document.getElementById('city').value;
        } else { // Sinon je défini la variable city a vide
            city = '' ;
        }

        // Je m'assure qu'on ait saisi la ville
        if(city !== ''){
            // Je défini une variable qui contient l'url de mon API avec les différents paramètres GET
            // Les paramètres get se trouvent après le ? et son séparés par des &.
            // Ils fonctionnent comme un tableau (array). clé=valeur
        urlAPI = "https://api.openweathermap.org/data/2.5/find?appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&q="+city;
}

/*
        q = Toulouse
        appid = clé api
        units = metric
        lang = fr
*/

        else if (getLatitude !== '' && getLongitude !==''){
            urlAPI = "https://api.openweathermap.org/data/2.5/find?appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&lat="+getLatitude +"&lon=" +getLongitude;
          }

        // La variable urlAPI est bien complétée (avec une url geoloc ou ville)
        // Je lance mon appel à l'API météo
        if (urlAPI !==''){
            // Appel de l'url (vous mettez l'url dans votre navigateur)
            
        // Appel de l'url (vous mettez l'url de votre navigateur)
        fetch(urlAPI)
        .then(function(resultatJSON){ // Donc je récupère les résultats

            //Je retourne ces résultats à la fonction "then()" suivante en lui indiquant que c'est un Json
            // Les résultats sont tous à l'intérieur de la variable "resultatJSON"
            // Cette variable est définie dans le "function(resultatJSON)" ci-dessus.

            // Et pour lui dire que c'est un json, j'utilise la ligne ci-dessous.
            return resultatJSON.json();
        })
        .then(function(myJson){
            if(myJson.cod == 200){

                console.log(myJson); // Toutes les infos de mon flux
                
                let donnees_meteo = myJson.list[0];

                myHTML = '<h1>'+donnees_meteo.name +'<h1>';
                myHTML += '<h2> <img src="icons/' +donnees_meteo.weather[0].icon +'.png" id="iconsmeteo" alt="icon meteo"></h2>' ;
                //<img src="icons/01d.png" />
                myHTML  += '<h2>' +donnees_meteo.weather[0].description +'. '  +Math.round(donnees_meteo.main.temp) + ' °C</h2>' ;
                myHTML += '<h2 className="maxtemp"> Max <i class="fas fa-temperature-high"></i> : ' +Math.round(donnees_meteo.main.temp_max) +' °C</h2>' ;
                myHTML += '<h2 class="mintemp"> Min <i class="fas fa-temperature-low"></i> : ' +Math.round(donnees_meteo.main.temp_min) +' °C</h2>' ;
                myHTML += '<h2> Humidité <i class="fas fa-tint"></i> : ' +donnees_meteo.main.humidity +'% </h2>' ;
                
                document.getElementById('meteo').innerHTML = myHTML  ;

            } else if (myJson.cod == 401){
                console.log(myJson.message);
            }
        })
        .catch(function(error){
            console.log(error);
            console.log('Erreur de communication avec l\'API') ;
        }) ;
        } else {
          console.log('Vous devez saisir une ville ou vous géolocaliser') ;
        }

    } // Fin function callApi

    function callApi2(event) {

      let city;
      let urlAPI2;

      event.preventDefault() ;

      if(event.currentTarget.getAttribute('name') == 'previsionnn') {
          city = document.getElementById('city').value;
      } else { 
          city = '' ;
      }

      if(city !== ''){
      urlAPI2 = "https://api.openweathermap.org/data/2.5/forecast?&appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&q="+city ;
      }

      else if (getLatitude !== '' && getLongitude !==''){
          urlAPI2 = "https://api.openweathermap.org/data/2.5/forecast?&appid=eeaf8a7283f472ef951921252c999f79&units=metric&lang=fr&lat="+getLatitude +"&lon=" +getLongitude;
      }

      if (urlAPI2 !==''){
        
      fetch(urlAPI2)
      .then(function(resultatJSON2){ // Donc je récupère les résultats

          //Je retourne ces résultats à la fonction "then()" suivante en lui indiquant que c'est un Json
          // Les résultats sont tous à l'intérieur de la variable "resultatJSON"
          // Cette variable est définie dans le "function(resultatJSON)" ci-dessus.

          // Et pour lui dire que c'est un json, j'utilise la ligne ci-dessous.
          return resultatJSON2.json();
      })
      .then(function(myJson2){
          if(myJson2.cod == 200){

              console.log(myJson2);
              
              let previsions = myJson2.city ;

              myHTMLnom = '<h1> '+previsions.name + '</h1>' ;
              document.getElementById('previsionsnom').innerHTML = myHTMLnom  ;

              let previsions24 = myJson2.list[6];

              myHTML2 = '<h2> Demain : <h2>';
              myHTML2 += '<h2> <img src="icons/' +previsions24.weather[0].icon +'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>' ;
              myHTML2  += '<h2>' +previsions24.weather[0].description +'</h2>' ;
              myHTML2 += '<h2>' +Math.round(previsions24.main.temp) + ' °C </h2>';
              document.getElementById('previsionsa24').innerHTML = myHTML2  ;

              let previsions48 = myJson2.list[12];

              myHTML3 = '<h2> Après-demain : <h2>';
              myHTML3 += '<h2> <img src="icons/' +previsions48.weather[0].icon +'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>' ;
              myHTML3  += '<h2>' +previsions48.weather[0].description +'</h2>' ;
              myHTML3 += '<h2>' +Math.round(previsions48.main.temp) + ' °C </h2>';
              document.getElementById('previsionsa48').innerHTML = myHTML3  ;

              let previsions72 = myJson2.list[18];

              myHTML4 = '<h2> Dans 3 jours : <h2>';
              myHTML4 += '<h2> <img src="icons/' +previsions72.weather[0].icon +'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>' ;
              myHTML4  += '<h2>' +previsions72.weather[0].description +'</h2>' ;
              myHTML4 += '<h2>' +Math.round(previsions72.main.temp) + ' °C </h2>';
              document.getElementById('previsionsa72').innerHTML = myHTML4  ;

              let previsions96 = myJson2.list[24];

              myHTML5 = '<h2> Dans 4 jours :<h2>';
              myHTML5 += '<h2> <img src="icons/' +previsions96.weather[0].icon +'.png" className="iconsmeteoprevisions" alt="icon meteo"></h2>' ;
              myHTML5  += '<h2>' +previsions96.weather[0].description +'</h2>' ;
              myHTML5 += '<h2>' +Math.round(previsions96.main.temp) + ' °C </h2>';
              document.getElementById('previsionsa96').innerHTML = myHTML5  ;

          } else if (myJson2.cod == 401){
              console.log(myJson2.message);
          }
      })
      .catch(function(error){
          console.log(error);
          console.log('Erreur de communication avec l\'API') ;
      }) ;
      } else {
        console.log('Vous devez saisir une ville ou vous géolocaliser') ;
      }

    } // Fin function callApi2


  // Rendu HTML (dans return) (fait en JSX):
  return (
    <div className="App">

      <CustomNavBar />

      <header>
        <div>
          <h1>METEO</h1>
          <DateActuelle id="dateactuelle"/>
          <div id='meteo' dangerouslySetInnerHTML={{ __html: myHTML}}>
          </div>
          <div id='geoloc'> </div>
        </div>
      </header>

      <Container>
        <Row className="ville">
          <Col className="recherche">
            <form>
              <Input type="text" name="city" id="city" placeholder="Recherche ville..."></Input>
              <button name="search" type="submit" id="search" onClick={callApi}> <i className="fas fa-search"></i> </button>
            </form>
          </Col>
        </Row>

        <Row>
          <Col>
            <form>
                <button name="geoloc" id="btnGeoloc" type="button" onClick={callApi}>Me géolocaliser <i className="fas fa-map-marker-alt"></i></button>
              </form>
          </Col>
        </Row>

        <Row id="separator"></Row>

        <p id="prochain"> Quel temps dans les prochains jours ?</p>

        <form>
            <button name="previsionnn" id="previsionnn" type="button" onClick={callApi2}>Les prévisions</button>
        </form>

      </Container>

      <section id="sectionprevisions">
        <div id='previsionsnom' dangerouslySetInnerHTML={{ __html: myHTMLnom}}></div>
          <div id="resultatsprevisions">
            <div id='previsionsa24' dangerouslySetInnerHTML={{ __html: myHTML2}}></div>
            <div id='previsionsa48' dangerouslySetInnerHTML={{ __html: myHTML3}}></div>
            <div id='previsionsa72' dangerouslySetInnerHTML={{ __html: myHTML4}}></div>
            <div id='previsionsa96' dangerouslySetInnerHTML={{ __html: myHTML5}}></div>
          </div>
      </section>

      <img src={ImageBas} alt="weather" id="imagebas" />

      <Footer />

    </div> // Fin div className App

  ); // Fin return


} // Fin function App


export default App;
