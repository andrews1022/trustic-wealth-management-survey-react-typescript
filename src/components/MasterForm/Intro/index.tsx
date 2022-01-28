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

const Intro = () => {
	const formContext = useContext(FormContext);

	return (
		<S.QuestionWrapper>
			<Heading element='h1' size='large'>
				{titles[titles.map((el) => el.step).indexOf(formContext.formState.currentStep)].title}
			</Heading>

			<p>Want to find out what they said now? Download the survey results!</p>

			<S.ButtonRow>
				<Button
					mode='hollow'
					onClick={() => formContext.formDispatch({ type: 'OPEN_MODAL' })}
					size='large'
				>
					Download Survey Results
				</Button>
				<Button
					mode='solid'
					onClick={() => formContext.formDispatch({ type: 'INCREMENT_CURRENT_STEP' })}
					size='large'
				>
					Start Survey
				</Button>
			</S.ButtonRow>
		</S.QuestionWrapper>
	);
};

export default Intro;
