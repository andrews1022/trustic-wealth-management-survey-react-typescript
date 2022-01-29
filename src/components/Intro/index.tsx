import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Button from '../Button';
import Heading from '../Heading';

// styles
import * as S from './styles';

// data
import titles from '../../data/titles';

// constants
import { FIRST_INDEX } from '../../constants/constants';

// types
import { StepToRender } from '../../types/types';

const Intro = ({ stepToRender }: StepToRender) => {
	const formContext = useContext(FormContext);

	const { currentStep } = formContext.formState;

	return formContext.formState.currentStep === stepToRender ? (
		<S.QuestionWrapper>
			<Heading element='h1' marginBottom={4} size='large'>
				{titles.filter((t) => t.step === currentStep)[FIRST_INDEX].title}
			</Heading>

			<p>Want to find out what they said now? Download the survey results!</p>

			<S.ButtonRow>
				<Button
					mode='solid'
					onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
					size='large'
				>
					Start Survey
				</Button>
			</S.ButtonRow>
		</S.QuestionWrapper>
	) : null;
};

export default Intro;
