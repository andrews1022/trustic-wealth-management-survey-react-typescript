/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';

// context
import FormContext from './context/FormContext';
import { formReducer, initialFormState } from './reducer/formReducer';

// components
import MasterForm from './components/MasterForm';

const App = () => {
	const [state, dispatch] = useReducer(formReducer, initialFormState);

	return (
		<FormContext.Provider value={{ formState: state, formDispatch: dispatch }}>
			<MasterForm />
		</FormContext.Provider>
	);
};

export default App;
