// import { Input, Button } from "reactstrap";
import React from 'react' ;
// import './Weather.css';

class WeatherData extends React.Component {

    render () {
        return (
            <main>

                <div>
                    icon
                </div>
                <div>
                    {this.props.weathercity}
                </div>
                <div>
                    {this.props.weathertemp}°C
                </div>

            </main>
        )
    }
}


export default WeatherData;