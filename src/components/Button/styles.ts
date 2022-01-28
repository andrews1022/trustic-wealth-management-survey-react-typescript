import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';

// types
import { ButtonMode, ButtonSize } from '../../types/types';

export interface StyledButtonProps {
	mode: ButtonMode;
	size: ButtonSize;
}

const setButtonMode = (mode: ButtonMode): FlattenInterpolation<ThemeProps<any>> => {
	switch (mode) {
		case 'hollow':
			return css`
				background-color: transparent;
				border: 0.125rem solid ${(props) => props.theme.colors.gulfBlue};
				margin-right: 1.5rem;

				&:hover,
				&:active,
				&:focus {
					background-color: ${(props) => props.theme.colors.gulfBlue};
					box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
					color: ${(props) => props.theme.shades.white};
					outline: none;
					transform: translateY(-0.25rem);
				}
			`;

		case 'pop':
			return css`
				background-color: transparent;

				&:hover,
				&:active,
				&:focus {
					background-color: ${(props) => props.theme.colors.lochmara};
					color: ${(props) => props.theme.greys.whiteSmoke};
					box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
					transform: translateY(-0.25rem);
				}
			`;

		case 'solid':
			return css`
				background-color: ${(props) => props.theme.colors.supernova};
				border: 0.125rem solid transparent;

				&:hover,
				&:active,
				&:focus {
					/* background-color: darken($supernova, 10%); */
					box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
					color: ${(props) => props.theme.colors.gulfBlue};
					outline: none;
					transform: translateY(-0.25rem);
				}
			`;

		default:
			return css``;
	}
};

export const Button = styled.button<StyledButtonProps>`
	border: none;
	border-radius: 3rem;
	color: ${({ theme }) => theme.colors.gulfBlue};
	cursor: pointer;
	font-size: ${(props) => (props.size === 'small' ? '1.125rem' : '1.25rem')};
	font-weight: 600;
	padding: ${(props) => (props.size === 'small' ? '0.5rem 1.25rem' : '1rem 2rem')};
	transition: all 250ms ease-in-out;

	/* needs to be last to override default styles above */
	${({ mode }) => setButtonMode(mode)}
`;
