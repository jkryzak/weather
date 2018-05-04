import React from "react";

const Forecast = props => (
    <div>
        { props.city && <h3>{props.city}, {props.state}</h3> }
        { props.temp && <p>Currently: <strong>{props.temp}°</strong> and {props.text}</p> }

        { props.error && <p>{ props.error }</p>}
    </div>
)

export default Forecast;