import { createContext } from 'react';

// types
import { FormState } from '../types/types';

const FormContext = createContext<FormState | {}>({});

export default FormContext;
