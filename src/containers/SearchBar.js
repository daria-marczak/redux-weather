import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  };

  onFormSubmit(event) {
    event.preventDefault();

    // Fetching data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch); // This causes the action creator whenever it gets called to bind the action creators with dispatch and make sure that the action flows down to the middleware and then to the reducers
};

export default connect(null, mapDispatchToProps)(SearchBar); // Whenever we are passing the function, it always goes in to the second argument
// Null is actually to say that we don't need any state as Redux is taking care of it
// Thanks to this we have access to props