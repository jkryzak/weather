import React from "react";

class Forecast extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.state} {this.props.country}</p> }
                { this.props.temp && <p>Temperature: {this.props.temp}</p> }
                { this.props.error && <p>{ this.props.error }</p>}
            </div>
        );
    }
};

export default Forecast;