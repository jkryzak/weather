import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getForecast}>
                    <p><label>City</label><br/>
                    <input type="text" name="city" placeholder="City."/></p>
                    <p><label>State</label><br/>
                    <input type="text" name="state" placeholder="State"/></p>
                    <button>Weather Check</button>
                </form>
            </div>
        );
    }
};

export default Form;