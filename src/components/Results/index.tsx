import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Answers from '../Answers';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';
import { Divider } from '../UI/Divider';
import { Heading } from '../UI/Heading';

const Results = () => {
  const formContext = useContext(FormContext);

  // event functions
  const restartSurveyHandler = () => {
    formContext.formDispatch({ type: 'RESTART_SURVEY' });
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.HeroTextWrapper>
          <Heading as='h1' marginBottom={2} size='large'>
            See how your answers align with other Canadians.
          </Heading>

          <Heading as='h2' marginBottom={2} size='medium'>
            Download the complete survey results to get the full picture of what other Canadians
            selected, or get in touch to start planning.
          </Heading>

          <S.SelectionsWrapper>
            <p>
              Below are the answers other Canadian&apos;s selected. The highlighted answers are the
              ones you also selected.
            </p>

            <S.SelectionsInnerWrapper>
              <S.SelectionsBox />

              <p>= your selections</p>
            </S.SelectionsInnerWrapper>
          </S.SelectionsWrapper>
        </S.HeroTextWrapper>

        <Divider />

        <Answers index={1} />
        <Answers index={2} />
        <Answers index={3} />

        <S.RestartWrapper>
          <Heading as='h2' marginBottom={2} size='small'>
            Would you like to take the survey again?
          </Heading>

          <Button mode='hollow' onClick={restartSurveyHandler} size='large' type='button'>
            Take Survey Again
          </Button>
        </S.RestartWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default Results;
