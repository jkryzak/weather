import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getForecast}>
            <p><label>Location</label><br/>
            <input type="text" name="location" placeholder="Enter City, State or ZIP" />
            <button>Weather Check</button></p>
        </form>
    </div>
)

export default Form;