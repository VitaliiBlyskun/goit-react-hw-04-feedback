import PropTypes from 'prop-types';
import { CategoryList, StatisticsList } from "./Statistics.styled";


const Statistics = ( {good, neutral, bad, total, positivePercentage} ) => {
  return (
    <StatisticsList>
    <li>
      <CategoryList>Good: {good}</CategoryList>
    </li>
    <li>
      <CategoryList>Neutral: {neutral}</CategoryList>
    </li>
    <li>
      <CategoryList>Bad: {bad}</CategoryList>
    </li>
    <li>
      <CategoryList>Total: {total}</CategoryList>
    </li>
    <li>
      <CategoryList>
        Positive feedback: {positivePercentage}%
      </CategoryList>
    </li>
  </StatisticsList>
  )
}

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}