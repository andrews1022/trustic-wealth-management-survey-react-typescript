/* eslint-disable default-param-last */

export type FormState = {
	checkedOptions: string[];
	currentQuestion: number;
	currentStep: number;
};

export type FormActions =
	| { type: 'INCREMENT_CURRENT_STEP' }
	| { type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' }
	| { type: 'OPTION_CHECKED'; payload: string }
	| { type: 'RESTART_SURVEY' };

export const initialFormState: FormState = {
	checkedOptions: [],
	currentQuestion: 1,
	currentStep: 0
};

export const formReducer = (
	state: FormState = initialFormState,
	action: FormActions
): FormState => {
	switch (action.type) {
		case 'INCREMENT_CURRENT_STEP': {
			return {
				...state,
				currentStep: state.currentStep + 1
			};
		}

		case 'INCREMENT_CURRENT_STEP_AND_QUESTION': {
			return {
				...state,
				currentStep: state.currentStep + 1,
				currentQuestion: state.currentQuestion + 1
			};
		}

		case 'OPTION_CHECKED': {
			return {
				...state,
				checkedOptions:
					state.checkedOptions.indexOf(action.payload) === -1
						? state.checkedOptions.concat(action.payload)
						: state.checkedOptions.filter((option) => option !== action.payload)
			};
		}

		case 'RESTART_SURVEY': {
			return initialFormState;
		}

		default: {
			return state;
		}
	}
};
