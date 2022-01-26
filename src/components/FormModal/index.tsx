import React, { useContext } from 'react';
import Modal from 'react-modal';

// context
import FormContext from '../../context/FormContext';

const FormModal = () => {
	// context
	const formContext = useContext(FormContext);

	return (
		<Modal
			ariaHideApp={false}
			closeTimeoutMS={500}
			isOpen={formContext.formState.isModalOpen}
			onRequestClose={() => formContext.formDispatch({ type: 'CLOSE_MODAL' })}
		>
			<h2>Hello from the Form Modal!</h2>
		</Modal>
	);
};

export default FormModal;
