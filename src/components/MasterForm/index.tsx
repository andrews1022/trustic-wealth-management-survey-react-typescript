import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Nav from '../Nav';
import FormModal from '../FormModal';

// styles
import * as S from './styles';

const MasterForm = () => {
	const formContext = useContext(FormContext);

	return (
		<div>
			{formContext.formState.currentStep !== 4 ? (
				<S.Wrapper>
					<Nav />

					<S.InnerWrapper>
						<h2>Intro and Question components will go here</h2>
						{/* <Intro /> */}
						{/* <Question1 /> */}
						{/* <Question2 /> */}
						{/* <Question3 /> */}
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
