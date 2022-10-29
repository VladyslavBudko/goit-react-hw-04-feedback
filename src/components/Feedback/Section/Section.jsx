import React from 'react';

const Section = ({ title, children }, ) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
      {/* <ButtonList onBtnClick={onBtnClick} />
      <Statistics state={state} /> */}
    </>
  );
};

export default Section;
