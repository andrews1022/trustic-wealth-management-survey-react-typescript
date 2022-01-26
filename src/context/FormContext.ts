import { createContext } from 'react';
import { initialFormState } from '../reducer/formReducer';

// types
import { FormContextType } from '../types/types';

const FormContext = createContext<FormContextType>({
	formState: initialFormState,
	formDispatch: () => null
});

export default FormContext;
