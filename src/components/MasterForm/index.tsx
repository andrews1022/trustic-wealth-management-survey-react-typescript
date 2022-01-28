import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import FormModal from '../FormModal';
import Intro from './Intro';
import Nav from '../Nav';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';

// styles
import * as S from './styles';

// svgs
import GraphSvg from '../GraphSvg';

const MasterForm = () => {
	const formContext = useContext(FormContext);

	return (
		<div>
			{formContext.formState.currentStep !== 4 ? (
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
				<div>
					<p>Results component will go here</p>
					{/* <Results /> */}
					<FormModal />
				</div>
			)}
		</div>
	);
};

export default MasterForm;
