import styled from 'styled-components';

export const FeedbackOp = styled.section`
  display: flex;
  gap: 10px;
  width: fit-content;
`;
export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: black;
  background-color: green;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  &:hover {
    color: white;
  }

  &:nth-last-child(3) {
    background-color: green;
    &:hover {
      background-color: greenyellow;
    }
  }
  &:nth-last-child(2) {
    background-color: yellow;
    &:hover {
      background-color: coral;
    }
  }
  &:nth-last-child(1) {
    background-color: red;
    &:hover {
      background-color: darkorchid;
    }
  }
`;
