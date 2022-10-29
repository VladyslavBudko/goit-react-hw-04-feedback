import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ButtonList from './Buttons';
import Statistics from './Statistics'

export class Feedback extends Component {
  //   static defaultProps = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClock = btnName => {
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ButtonList onBtnClock={this.onBtnClock} />
        <Statistics state={this.state}/>
      </>
    );
  }
}
