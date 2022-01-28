import React, { useContext } from 'react';

// context
import FormContext from '../../../context/FormContext';

// components
import Button from '../../Button';
import Heading from '../../Heading';

// styles
import * as S from '../styles';

// data
import titles from '../../../data/titles';

// constants
import { FIRST_INDEX } from '../../../constants/constants';

const Question1 = () => {
	const formContext = useContext(FormContext);

	const { currentStep } = formContext.formState;

	return (
		<S.QuestionWrapper>
			<S.CurrentQuestion>Question {formContext.formState.currentQuestion}/3</S.CurrentQuestion>

			<Heading element='h2' size='large'>
				{titles.filter((t) => t.step === currentStep)[FIRST_INDEX].title}
			</Heading>

			<Button
				mode='hollow'
				onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
				size='large'
			>
				Next Question
			</Button>
		</S.QuestionWrapper>
	);
};

export default Question1;
