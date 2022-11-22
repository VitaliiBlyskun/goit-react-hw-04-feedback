import PropTypes from 'prop-types';
import { Button } from './feedbackOptions.styled';

// const FeedbackOptions = ({
//   onHandleClickGood,
//   onHandleClickNeutral,
//   onHandleClickBad,
// }) => {
//   return (
//     <WrapperBtn>
//       <li>
//         <Button type="Button" onClick={onHandleClickGood}>
//           Good
//         </Button>
//       </li>
//       <li>
//         <Button type="Button" onClick={onHandleClickNeutral}>
//           Neutral
//         </Button>
//       </li>
//       <li>
//         <Button type="Button" onClick={onHandleClickBad}>
//           Bad
//         </Button>
//       </li>
//     </WrapperBtn>
//   );
// };

// export default FeedbackOptions;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options)
  const buttons = keys.map(key => {
      return <Button key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}</Button>
  })
  return (
      <>
          {buttons}
      </>
  )
}

export default FeedbackOptions;


FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
}