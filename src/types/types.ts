export type FormState = {
	checkedOptions: string[];
	currentQuestion: number;
	currentStep: number;
	formIsSubmitted: boolean;
	isModalOpen: boolean;
};

export type FormActions =
	| { type: 'CLOSE_MODAL' }
	| { type: 'FORM_IS_SUBMITTED' }
	| { type: 'FORM_IS_NOT_SUBMITTED' }
	| { type: 'INCREMENT_CURRENT_STEP' }
	| { type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' }
	| { type: 'OPEN_MODAL' }
	| { type: 'OPTION_CHECKED'; payload: string }
	| { type: 'RESTART_SURVEY' };

export type Option = {
	forQuestion: number;
	id: string;
	percentAnswered: number;
	questionText: string;
};

export type Title = {
	step: number;
	title: string;
};
