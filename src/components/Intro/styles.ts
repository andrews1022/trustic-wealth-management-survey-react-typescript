import styled from 'styled-components';

export const QuestionWrapper = styled.div`
	flex: 0 0 47.5%;
`;

export const ButtonRow = styled.div`
	display: flex;
	align-items: center;
	margin-top: 7.5%;

	@media ${({ theme }) => theme.mediaQueries.laptopSmall} {
		align-items: flex-start;
		flex-direction: column;
	}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		align-items: center;
	}
`;
