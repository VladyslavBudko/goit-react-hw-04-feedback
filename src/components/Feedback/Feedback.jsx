import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ButtonList from './Buttons';
import Statistics from './Statistics';
import Section from './Section';

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

  onBtnClick = btnName => {
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <ButtonList onBtnClick={this.onBtnClick} />
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state} />
        </Section>
      </>
    );
  }
}
