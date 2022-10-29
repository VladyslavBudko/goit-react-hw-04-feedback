import React from "react";
// import PropTypes from 'prop-types';

const ButtonList = ({onBtnClick}) => {
    return (<>
        <button
            type="button"
            onClick={() => {
                onBtnClick('good');
            } }
        >
            Good
        </button>
        <button
            type="button"
            onClick={() => {
                onBtnClick('neutral');
            } }
        >
            Neutral
        </button>
        <button
            type="button"
            onClick={() => {
                onBtnClick('bad');
            } }
        >
            Bad
        </button>
    </>
   )}

   export default ButtonList;