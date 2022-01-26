import React from 'react';

// styles
import * as S from './styles';

// types
import { ButtonMode, ButtonSize, Children } from '../../types/types';

type ButtonProps = {
	children: Children;
	mode: ButtonMode;
	onClick: () => void;
	size: ButtonSize;
};

const Button = ({ children, mode, onClick, size }: ButtonProps) => (
	<S.Button mode={mode} size={size} onClick={onClick} type='button'>
		{children}
	</S.Button>
);

export default Button;
