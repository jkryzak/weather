import React from 'react';

const Form = props => (
    <div className="weather-form">
        <form onSubmit={props.getForecast}>
            <label className="sr-only">Location</label>
            <input type="text" name="location" className="location-input" autoFocus placeholder="Enter City, State or ZIP" />
            <button>Submit</button>
        </form>
    </div>
)

export default Form;