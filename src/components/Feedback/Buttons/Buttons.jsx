import React from "react";
// import PropTypes from 'prop-types';

const ButtonList = ({onBtnClock}) => {
    return (<>
        <button
            type="button"
            onClick={() => {
                onBtnClock('good');
            } }
        >
            Good
        </button>
        <button
            type="button"
            onClick={() => {
                onBtnClock('neutral');
            } }
        >
            Neutral
        </button>
        <button
            type="button"
            onClick={() => {
                onBtnClock('bad');
            } }
        >
            Bad
        </button>
    <h2>Statistics</h2><div></div></>
   )}

   export default ButtonList;