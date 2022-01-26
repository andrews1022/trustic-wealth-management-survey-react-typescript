import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Nav from '../Nav';
import Modal from '../Modal';

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
						<p>Intro and Question components will go here</p>
						{/* <Intro /> */}
						{/* <Question1 /> */}
						{/* <Question2 /> */}
						{/* <Question3 /> */}
					</S.InnerWrapper>

					<Modal />
				</S.Wrapper>
			) : (
				<div>
					<p>Results component will go here</p>
					{/* <Results /> */}
					<Modal />
				</div>
			)}
		</div>
	);
};

export default MasterForm;
