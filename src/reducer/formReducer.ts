/* eslint-disable default-param-last */

// import { Option } from '../types/types';

type FormState = {
	checkedOptions: string[];
	currentQuestion: number;
	currentStep: number;
	formIsSubmitted: boolean;
	isModalOpen: boolean;
};

export const initialFormState: FormState = {
	checkedOptions: [],
	currentQuestion: 1,
	currentStep: 0,
	formIsSubmitted: false,
	isModalOpen: false
};

export type Actions =
	| { type: 'CLOSE_MODAL' }
	| { type: 'FORM_IS_SUBMITTED' }
	| { type: 'FORM_IS_NOT_SUBMITTED' }
	| { type: 'INCREMENT_CURRENT_STEP' }
	| { type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' }
	| { type: 'OPEN_MODAL' }
	| { type: 'OPTION_CHECKED'; payload: string }
	| { type: 'RESTART_SURVEY' };

export const formReducer = (state: FormState, action: Actions): FormState => {
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
