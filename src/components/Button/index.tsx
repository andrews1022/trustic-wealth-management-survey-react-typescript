import React from 'react';

// styles
import * as S from './styles';

// types
import { Children } from '../../types/types';
import { StyledButtonProps } from './styles';

interface ButtonProps extends StyledButtonProps {
	children: Children;
	onClick: () => void;
}

const Button = ({ children, mode, onClick, size }: ButtonProps) => (
	<S.Button mode={mode} size={size} onClick={onClick} type='button'>
		{children}
	</S.Button>
);

export default Button;
