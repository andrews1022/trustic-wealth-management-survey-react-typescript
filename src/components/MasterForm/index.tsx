import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Nav from '../Nav';
import Modal from '../Modal';

const MasterForm = () => {
	const formContext = useContext(FormContext);

	return (
		<div>
			{formContext.formState.currentStep !== 4 ? (
				<div className='master-form'>
					<Nav />

					<div className='master-form__inner'>
						<p>Intro and Question components will go here</p>
						{/* <Intro /> */}
						{/* <Question1 /> */}
						{/* <Question2 /> */}
						{/* <Question3 /> */}
					</div>

					<Modal />
				</div>
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
