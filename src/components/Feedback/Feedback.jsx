import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ButtonList from './Buttons/Buttons';
import InfoFeedback from './InfoFeedback/InfoFeedback'

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
        <InfoFeedback state={this.state}/>
        {/* <h2>Statistics</h2> */}
        {/* <div>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </div> */}
      </>
    );
  }
}
