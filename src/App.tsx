import React, { useMemo, useReducer } from 'react';

// context
import FormContext from './context/FormContext';
import { formReducer, initialFormState } from './reducer/formReducer';

// components
import MasterForm from './components/MasterForm';

const App = () => {
	const [state, dispatch] = useReducer(formReducer, initialFormState);

	const memoizedContext = useMemo(() => ({ formDispatch: dispatch, formState: state }), []);

	return (
		<FormContext.Provider value={memoizedContext}>
			<MasterForm />
		</FormContext.Provider>
	);
};

export default App;
