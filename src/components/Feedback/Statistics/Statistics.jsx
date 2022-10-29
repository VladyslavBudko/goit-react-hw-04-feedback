import React from 'react';

// { good, bad, neutral }
const Statistics = ({ state }) => {
  const countTotalFeedback = state.good + state.neutral + state.bad;
  const countPositiveFeedbackPercentage = Math.round(
    (state.good / countTotalFeedback) * 100
  );

  const StatisticsList = (
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

  // <Notification message="There is no feedback">
  //   countTotalFeedback ? : return message
  // </Notification>

  return StatisticsList;
};

export default Statistics;
