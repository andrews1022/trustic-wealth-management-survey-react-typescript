import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';
import { Heading } from '../UI/Heading';
import { Wrapper } from '../UI/Wrapper';

// data
import titles from '../../data/titles';

// constants
import { FIRST_INDEX } from '../../constants/constants';

// types
import type { StepToRender } from '../../types/types';

const Intro = ({ stepToRender }: StepToRender) => {
  const formContext = useContext(FormContext);

  // destructure currentStep for cleaner jsx
  const { currentStep } = formContext.formState;

  // event functions
  const incrementStepHandler = () => {
    formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' });
  };

  return currentStep === stepToRender ? (
    <Wrapper>
      <Heading as='h1' marginBottom={4} size='large'>
        {titles.filter((t) => t.step === currentStep)[FIRST_INDEX].title}
      </Heading>

      <p>Want to find out what they said now? Download the survey results!</p>

      <S.ButtonRow>
        <Button mode='solid' onClick={incrementStepHandler} size='large' type='button'>
          Start Survey
        </Button>
      </S.ButtonRow>
    </Wrapper>
  ) : null;
};

export default Intro;
