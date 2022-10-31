import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ButtonList from './Buttons';
import Statistics from './Statistics';
import Section from './Section';

// const buttons = {
//   good: 'good',
//   neutral: 'neutral',
//   bad: 'bad',
// }

export class Feedback extends Component {
  state = {
    buttons: null,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = btnName => {
    // console.log(btnName);
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <ButtonList
            onBtnClick={this.onBtnClick}
            selected={this.state.buttons}
          />
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state} />
        </Section>
      </>
    );
  }
}
