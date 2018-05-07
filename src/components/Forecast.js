import React from "react";

const Forecast = props => (
    <div>
        { props.city && 
            <div>
                <h3>{props.city}, {props.state}</h3>
                <p>Currently: <strong>{props.temp}°</strong> and {props.text}</p>
                <p>
                    Low: {props.low}°<br/>
                    High: {props.high}
                </p>
            </div>
        }
        { props.error && <p>{ props.error }</p>}
    </div>
)

export default Forecast;