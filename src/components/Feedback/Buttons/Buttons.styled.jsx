import styled from '@emotion/styled';

export const Buttons = styled.button`
  font: inherit;
  cursor: pointer;

  outline: none;
  display: inline-block;
  text-align: center;

  margin: 5px;
  padding: 0.5em 1em;

  border: solid 1px transparent;
  border-radius: 4px;

  color: #ffffff;
  background-color: ${p => {
    return p.selected ? 'tomato' : 'blue';
  }};

  &:hover,
  &:focus {
    color: #9555af;
    border-color: currentColor;
    background-color: white;
  }
`;
