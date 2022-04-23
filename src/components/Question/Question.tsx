import { useContext } from 'react';
import type { ChangeEvent } from 'react';

// context
import FormContext from '../../context/FormContext';

// styled components
import * as S from './Question.styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { Wrapper } from '../UI/Wrapper';

// data
import options from '../../data/options';
import titles from '../../data/titles';

// constants
import { FIRST_INDEX } from '../../constants/constants';

// types
import type { StepToRender } from '../../types/types';

const Question = ({ stepToRender }: StepToRender) => {
  const formContext = useContext(FormContext);

  // destructure currentStep for cleaner jsx
  const { currentQuestion, currentStep } = formContext.formState;

  // event functions
  const incrementStepAndQuestionHandler = () => {
    formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' });
  };

  const optionCheckedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    formContext.formDispatch({ type: 'OPTION_CHECKED', payload: event.target.id });
  };

  return currentStep === stepToRender ? (
    <Wrapper>
      <S.CurrentQuestion>Question {currentQuestion}/3</S.CurrentQuestion>

      <Heading as='h2' marginBottom={2} size='medium'>
        {titles.filter((t) => t.step === currentStep)[FIRST_INDEX].title}
      </Heading>

      <S.List>
        {options.map((option) =>
          option.forQuestion === currentStep ? (
            <S.Item key={option.id}>
              <input id={option.id} onChange={optionCheckedHandler} type='checkbox' />

              <label htmlFor={option.id}>{option.questionText}</label>
            </S.Item>
          ) : null
        )}
      </S.List>

      <Button mode='hollow' onClick={incrementStepAndQuestionHandler} size='large' type='button'>
        Next Question
      </Button>
    </Wrapper>
  ) : null;
};

export default Question;
