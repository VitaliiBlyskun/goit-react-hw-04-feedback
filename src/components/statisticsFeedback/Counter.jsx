import { useState } from 'react';
import {
  ButtonBad,
  ButtonGood,
  ButtonNeutral,
} from './feedbackOptions/FeedbackOptions';
import Section from './section/Sections';
import Statistics from './statistics/Statistics';
import { MainWrapper } from 'components/Base.styled';
import Notification from './message/Message';
import { WrapperBtn } from './feedbackOptions/feedbackOptions.styled';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCounterGood = () => {
    setGood(prevState => prevState + 1);
  };

  const handleCounterNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const handleCounterBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <MainWrapper>
        <Section title="Please leave feedback">
          <WrapperBtn>
            <ButtonGood onHandleCounterGood={handleCounterGood} />
            <ButtonNeutral onHandleCounterNeutral={handleCounterNeutral} />
            <ButtonBad onHandleCounterBad={handleCounterBad} />
          </WrapperBtn>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </MainWrapper>
    </>
  );
}
