import PropTypes from 'prop-types';
import React from 'react';
import { Buttons } from './Buttons.styled';


const buttons = ['Good', 'Neutral', 'Bad'];

const ButtonList = ({ selected, onBtnClick }) => {
  return (
    <>
      {buttons.map(button => (
        <Buttons
        key = {button}
          type="button"
          onClick={() => {
            onBtnClick(button.toLowerCase());
          }}
        >
          {button}
        </Buttons>
      ))}
    </>
  );
};

export default ButtonList;

ButtonList.propTypes = {
  selected: PropTypes.string,
  onBtnClick: PropTypes.func,
};
