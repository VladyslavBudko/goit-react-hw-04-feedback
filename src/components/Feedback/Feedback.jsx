import React, {Component} from 'react';

export class Feedback extends React.Component {
  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
      </>
    );
  }
}
