import React from 'react';
import ReactDOM from 'react-dom';

class DateActuelle extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            dateajd = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

        this.state = {
            date : dateajd
        };
    }

    render() {
        return (
            <div className='datedujour'>
                {this.state.date}
            </div>
        );
    }
}

export default DateActuelle;