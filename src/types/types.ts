import React from 'react';

// general
export type Children = React.ReactNode;

// context
export type FormActions =
	| { type: 'CLOSE_MODAL' }
	| { type: 'FORM_IS_SUBMITTED' }
	| { type: 'FORM_IS_NOT_SUBMITTED' }
	| { type: 'INCREMENT_CURRENT_STEP' }
	| { type: 'INCREMENT_CURRENT_STEP_AND_QUESTION' }
	| { type: 'OPEN_MODAL' }
	| { type: 'OPTION_CHECKED'; payload: string }
	| { type: 'RESTART_SURVEY' };

export type FormState = {
	checkedOptions: string[];
	currentQuestion: number;
	currentStep: number;
	formIsSubmitted: boolean;
	isModalOpen: boolean;
};

export type FormContextType = {
	formState: FormState;
	formDispatch: React.Dispatch<FormActions>;
};

// data
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

// ui
export type ButtonMode = 'hollow' | 'pop' | 'solid';
export type ButtonSize = 'small' | 'large';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'small' | 'medium' | 'large';

// dynamic component rendering
export type StepToRender = {
	stepToRender: number;
};
