import React, { useContext } from 'react';

// context
import FormContext from '../../../context/FormContext';

// components
import Heading from '../../Heading';

// styles
import * as S from '../styles';

// data
import titles from '../../../data/titles';

const Intro = () => {
	const formContext = useContext(FormContext);

	return (
		<S.QuestionWrapper>
			<Heading element='h1' size='large'>
				{titles[titles.map((el) => el.step).indexOf(formContext.formState.currentStep)].title}
			</Heading>

			<p>Want to find out what they said now? Download the survey results!</p>

			<div className='button-row'>
				<button
					className='button button--hollow button--large'
					onClick={() => formContext.formDispatch({ type: 'OPEN_MODAL' })}
					type='button'
				>
					Download Survey Results
				</button>
				<button
					className='button button--solid button--large'
					onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
					type='button'
				>
					Start Survey
				</button>
			</div>
		</S.QuestionWrapper>
	);
};

export default Intro;
