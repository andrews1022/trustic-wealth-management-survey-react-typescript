// a library of re-usable styled components / base styles to be used anywhere in the project

import { css } from 'styled-components';

export const DividerStyles = css`
	height: 0.125rem;
	width: 3rem;
	background-color: ${({ theme }) => theme.colors.gulfBlue};
	margin: 2.5% auto;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		@include size(0.25rem, 4rem);
	}

	@media ${({ theme }) => theme.mediaQueries.mobileMedium} {
		margin: 4% auto;
	}
`;
