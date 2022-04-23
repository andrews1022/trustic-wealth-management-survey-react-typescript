import { createContext, type Dispatch } from 'react';
import { initialFormState, type FormActions, type FormState } from '../reducers/formReducer';

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
