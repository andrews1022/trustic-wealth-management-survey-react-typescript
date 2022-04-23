/* eslint-disable react/jsx-no-constructed-context-values */

import { useReducer } from 'react';

// animations
import { AnimatePresence } from 'framer-motion';

// context
import FormContext from '../../context/FormContext';
import { formReducer, initialFormState } from '../../reducer/formReducer';

// components
import MasterForm from '../MasterForm/MasterForm';

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ formState: state, formDispatch: dispatch }}>
      <AnimatePresence exitBeforeEnter>
        <MasterForm />
      </AnimatePresence>
    </FormContext.Provider>
  );
};

export default App;
