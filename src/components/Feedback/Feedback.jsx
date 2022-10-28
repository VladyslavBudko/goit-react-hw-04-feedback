import React, { Component } from 'react';

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
        <div>
          <button
            type="button"
            onClick={() => {
              this.onBtnClock('good');
            }}
          >
            Good
          </button>
          <button
            type="button"
            onClick={() => {
              this.onBtnClock('neutral');
            }}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={() => {
              this.onBtnClock('bad');
            }}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
        </div>
      </>
    );
  }
}
