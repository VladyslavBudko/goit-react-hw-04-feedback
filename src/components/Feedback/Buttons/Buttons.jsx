import PropTypes from 'prop-types';
import React from 'react';
import { Buttons } from './Buttons.styled';


const buttons = ['Good', 'Neutral', 'Bad'];

const ButtonList = ({ selected, onBtnClick }) => {
  return (
    <>
      {buttons.map(button => (
        // console.log(button.toLowerCase);
        <Buttons
        key = {button}
          type="button"
          selected={selected === button.toLowerCase()}
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
