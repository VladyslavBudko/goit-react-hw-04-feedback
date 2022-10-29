import React from 'react';

// { good, bad, neutral }
const Statistics = ({ state }) => {
  const countTotalFeedback = state.good + state.neutral + state.bad;
  const countPositiveFeedbackPercentage = Math.round(
    (state.good / countTotalFeedback) * 100
  );

  return (
    <>
      <h2>Statistics</h2>
      <div>
        <p>Good:{state.good}</p>
        <p>Neutral:{state.neutral}</p>
        <p>Bad:{state.bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
      </div>
    </>
  );
};

export default Statistics;
