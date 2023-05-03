import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOp, Button } from './FeedbackOptions.styled';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOp>
      {options.map(item => {
        return (
          <Button key={item} name={item} onClick={onLeaveFeedback}>
            {item}
          </Button>
        );
      })}
    </FeedbackOp>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
