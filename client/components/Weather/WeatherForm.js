import React from 'react';

class WeatherForm extends React.Component {

    onFormSubmit(e) {
        e.preventDefault();
        let cityRef = this.refs.city;
        let city = cityRef.value;

        if (city.length > 0)
        {
            this.props.onSearch(city);
            cityRef.value = '';
            cityRef.focus();
        }
    };

    render() {
        return (
            <div>
                Weather form

                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter city name" ref="city" />
                    </div>

                    <button type="submit" className="btn btn-default">Get Weather</button>

                </form>

            </div>
        );
    }
}

export default WeatherForm;
