import { createContext, Dispatch } from 'react';
import { FormActions, FormState, initialFormState } from '../reducer/formReducer';

// context
type FormContextType = {
	formState: FormState;
	formDispatch: Dispatch<FormActions>;
};

const FormContext = createContext<FormContextType>({
	formState: initialFormState,
	formDispatch: () => null
});

export default FormContext;
