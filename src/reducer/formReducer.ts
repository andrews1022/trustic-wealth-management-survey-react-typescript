// types
import { FormState, FormActions } from '../types/types';

export const initialFormState: FormState = {
	checkedOptions: [],
	currentQuestion: 1,
	currentStep: 0,
	formIsSubmitted: false,
	isModalOpen: false
};

export const formReducer = (state: FormState, action: FormActions): FormState => {
	switch (action.type) {
		case 'CLOSE_MODAL': {
			return { ...state, isModalOpen: false };
		}

		case 'FORM_IS_SUBMITTED': {
			return { ...state, formIsSubmitted: true };
		}

		case 'FORM_IS_NOT_SUBMITTED': {
			return { ...state, formIsSubmitted: false };
		}

		case 'INCREMENT_CURRENT_STEP': {
			return { ...state, currentStep: state.currentStep + 1 };
		}

		case 'INCREMENT_CURRENT_STEP_AND_QUESTION': {
			return {
				...state,
				currentStep: state.currentStep + 1,
				currentQuestion: state.currentQuestion + 1
			};
		}

		case 'OPEN_MODAL': {
			return { ...state, isModalOpen: true };
		}

		case 'OPTION_CHECKED': {
			return { ...state, checkedOptions: state.checkedOptions.concat(action.payload) };
		}

		case 'RESTART_SURVEY': {
			return initialFormState;
		}

		default: {
			return state;
		}
	}
};
