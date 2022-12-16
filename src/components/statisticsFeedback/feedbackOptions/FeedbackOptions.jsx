import PropTypes from 'prop-types';
import { Button } from './feedbackOptions.styled';

export const ButtonGood = ({ good, onHandleCounterGood }) => {
  return (
    <>
      <Button type="button" onClick={() => onHandleCounterGood(good)}>
        good
      </Button>
    </>
  );
};

export const ButtonNeutral = ({ neutral, onHandleCounterNeutral }) => {
  return (
    <>
      <Button type="button" onClick={() => onHandleCounterNeutral(neutral)}>
        neutral
      </Button>
    </>
  );
};

export const ButtonBad = ({ bad, onHandleCounterBad }) => {
  return (
    <>
      <Button type="button" onClick={() => onHandleCounterBad(bad)}>
        bad
      </Button>
    </>
  );
};

ButtonGood.propTypes = {
  good: PropTypes.number,
  onHandleCounterGood: PropTypes.func.isRequired,
};

ButtonNeutral.propTypes = {
  neutral: PropTypes.number,
  onHandleCounterNeutral: PropTypes.func.isRequired,
};

ButtonBad.propTypes = {
  bad: PropTypes.number,
  onHandleCounterBad: PropTypes.func.isRequired,
};

