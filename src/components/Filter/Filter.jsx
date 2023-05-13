import React, { Component } from 'react';
import { LabelFilter } from './FilterStyled';

export class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
    // this.props.onFilter(event.currentTarget.value);
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <LabelFilter className="label-name">Find contacts by name</LabelFilter>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={event => this.handleFilter(event)}
        />
      </div>
    );
  }
}
