import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import FormModal from '../FormModal';
import Nav from '../Nav';

// form steps
import Intro from './Intro';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Results from './Results';

// styles
import * as S from './styles';

// svgs
import GraphSvg from '../GraphSvg';

const MasterForm = () => {
	const formContext = useContext(FormContext);

	return formContext.formState.currentStep !== 4 ? (
		<S.Wrapper>
			<Nav />

			<S.InnerWrapper>
				{formContext.formState.currentStep === 0 ? <Intro /> : null}
				{formContext.formState.currentStep === 1 ? <Question1 /> : null}
				{formContext.formState.currentStep === 2 ? <Question2 /> : null}
				{formContext.formState.currentStep === 3 ? <Question3 /> : null}

				<GraphSvg />
			</S.InnerWrapper>

			<FormModal />
		</S.Wrapper>
	) : (
		<>
			<Results />
			<FormModal />
		</>
	);
};

export default MasterForm;
