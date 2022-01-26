import React, { useReducer } from 'react';

// context
import FormContext from './context/FormContext';
import { formReducer, initialFormState } from './reducer/formReducer';

// components
import MasterForm from './components/MasterForm';

const App = () => {
	const { Provider } = FormContext;

	const [state, dispatch] = useReducer(formReducer, initialFormState);

	return (
		<Provider value={{ formState: state, formDispatch: dispatch }}>
			<h1>Hello from App.tsx!</h1>
			<MasterForm />
		</Provider>
	);
};

export default App;
