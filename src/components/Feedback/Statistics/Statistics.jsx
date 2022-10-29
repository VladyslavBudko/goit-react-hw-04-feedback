import React from 'react';
import Notification from '../Notification/Notification';

// { good, bad, neutral }
const Statistics = ({ state }) => {
  const countTotalFeedback = state.good + state.neutral + state.bad;
  const countPositiveFeedbackPercentage = Math.round(
    (state.good / countTotalFeedback) * 100
  );

  return !countTotalFeedback ? (
    <Notification message="There is no feedback" />
  ) : (
    <>
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
