import styled from 'styled-components';

export const CurrentQuestion = styled.p`
	font-size: 1rem;
`;

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.colors.gulfBlue};
	margin: 3.5% 0 7.5% 0;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		margin: 3.5% 0;
	}
`;

export const Item = styled.li`
	display: flex;
	align-items: flex-start;
	flex: 1 1 50%;
	margin-bottom: 1.25%;

	@media ${({ theme }) => theme.mediaQueries.laptopSmall} {
		flex: 1 1 100%;
		margin-bottom: 2%;
	}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		justify-content: center;
	}

	input {
		height: 1.125rem;
		width: 1.125rem;
		margin-right: 0.375rem;
	}

	label {
		color: ${({ theme }) => theme.colors.gulfBlue};
		font-size: 1.125rem;
	}
`;
