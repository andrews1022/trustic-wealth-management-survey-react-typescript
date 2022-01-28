import React, { useContext } from 'react';

// context
import FormContext from '../../../context/FormContext';

// components
import Button from '../../Button';
import Heading from '../../Heading';

// styles
import * as S from '../styles';

// data
import options from '../../../data/options';
import titles from '../../../data/titles';

// constants
import { FIRST_INDEX } from '../../../constants/constants';

const Question3 = () => {
	const formContext = useContext(FormContext);

	return (
		<S.QuestionWrapper>
			<S.CurrentQuestion>Question {formContext.formState.currentQuestion}/3</S.CurrentQuestion>

			<Heading element='h2' size='medium'>
				{titles.filter((t) => t.step === formContext.formState.currentStep)[FIRST_INDEX].title}
			</Heading>

			<S.QuestionList>
				{options.map(
					(option) =>
						option.forQuestion === formContext.formState.currentStep && (
							<S.QuestionItem key={option.id}>
								<input
									id={option.id}
									onChange={(e) =>
										formContext.formDispatch({ type: 'OPTION_CHECKED', payload: e.target.id })
									}
									type='checkbox'
								/>

								<label htmlFor={option.id}>{option.questionText}</label>
							</S.QuestionItem>
						)
				)}
			</S.QuestionList>

			<Button
				mode='hollow'
				onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
				size='large'
			>
				See Results
			</Button>
		</S.QuestionWrapper>
	);
};

export default Question3;
