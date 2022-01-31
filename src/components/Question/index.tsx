import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Button from '../Button';
import Heading from '../Heading';

// styles
import * as S from './styles';

// data
import options from '../../data/options';
import titles from '../../data/titles';

// constants
import { FIRST_INDEX } from '../../constants/constants';

// types
import { StepToRender } from '../../types/types';

const Question = ({ stepToRender }: StepToRender) => {
	const formContext = useContext(FormContext);

	return formContext.formState.currentStep === stepToRender ? (
		<S.Wrapper>
			<S.CurrentQuestion>Question {formContext.formState.currentQuestion}/3</S.CurrentQuestion>

			<Heading element='h2' marginBottom={2} size='medium'>
				{titles.filter((t) => t.step === formContext.formState.currentStep)[FIRST_INDEX].title}
			</Heading>

			<S.List>
				{options.map((option) =>
					option.forQuestion === formContext.formState.currentStep ? (
						<S.Item key={option.id}>
							<input
								id={option.id}
								onChange={(e) =>
									formContext.formDispatch({ type: 'OPTION_CHECKED', payload: e.target.id })
								}
								type='checkbox'
							/>

							<label htmlFor={option.id}>{option.questionText}</label>
						</S.Item>
					) : null
				)}
			</S.List>

			<Button
				mode='hollow'
				onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' })}
				size='large'
			>
				Next Question
			</Button>
		</S.Wrapper>
	) : null;
};

export default Question;
