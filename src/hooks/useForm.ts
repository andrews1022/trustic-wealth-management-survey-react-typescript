import { useContext } from 'react';
import type { Dispatch } from 'react';

import FormContext from '../context/FormContext';
import type { FormActions, FormState } from '../reducer/formReducer';

const useForm = (): [FormState, Dispatch<FormActions>] => {
  const { formDispatch: dispatch, formState: state } = useContext(FormContext);

  return [state, dispatch];
};

export default useForm;
