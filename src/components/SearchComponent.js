import React, { Component } from 'react';
import { timeout } from 'q';

export default class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { init: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ init: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.setSearchItem(event.target[0].value);
  }
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          className="form-control"
          placeholder = "Search for any artist"
          onChange={this.onInputChange}
          value={this.state.init} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
} 