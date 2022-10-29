import React from 'react';

// { good, bad, neutral }
const InfoFeedback = ({ state }) => {

  return (
    <>
      <h2>Statistics</h2>
      <div>
        <p>Good:{state.good}</p>
        <p>Neutral:{state.neutral}</p>
        <p>Bad:{state.bad}</p>
      </div>
    </>
  );
};

export default InfoFeedback;
