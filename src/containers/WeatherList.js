import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;  

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="blue" units="K"/></td>
        <td><Chart data={pressure} color="green" units="hPa"/></td>
        <td><Chart data={humidity} color="orange" units="%"/></td>        
      </tr>
    )
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
};

function mapStateToProps({ weather }) {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);

