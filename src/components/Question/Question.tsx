import type { ChangeEvent } from 'react';

// styled components
import * as S from './Question.styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { Wrapper } from '../UI/Wrapper';

// custom hooks
import useForm from '../../hooks/useForm';

// data
import options from '../../data/options';
import titles from '../../data/titles';

// constants
import { FIRST_INDEX } from '../../constants/constants';

// types
import type { StepToRender } from '../../types/types';

const Question = ({ stepToRender }: StepToRender) => {
  const [state, dispatch] = useForm();

  // event functions
  const incrementStepAndQuestionHandler = () => {
    dispatch({ type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' });
  };

  const optionCheckedHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'OPTION_CHECKED', payload: event.target.id });
  };

  return state.currentStep === stepToRender ? (
    <Wrapper>
      <S.CurrentQuestion>Question {state.currentQuestion}/3</S.CurrentQuestion>

      <Heading as='h2' marginBottom={2} size='medium'>
        {titles.filter((t) => t.step === state.currentStep)[FIRST_INDEX].title}
      </Heading>

      <S.List>
        {options.map((option) =>
          option.forQuestion === state.currentStep ? (
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
