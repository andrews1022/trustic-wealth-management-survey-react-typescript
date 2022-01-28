import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100vh;
	position: relative;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		height: auto;
	}
`;

export const InnerWrapper = styled.div`
	position: absolute;
	left: 50%;
	top: 52.5%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		position: static;
		transform: translate(0, 0);
		width: 100%;
	}
`;

export const QuestionWrapper = styled.div`
	flex: 0 0 47.5%;
`;

export const QuestionList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	color: ${({ theme }) => theme.colors.gulfBlue};
	margin: 3.5% 0 7.5% 0;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		margin: 3.5% 0;
	}
`;

export const QuestionItem = styled.li`
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

export const CurrentQuestion = styled.p`
	font-size: 1rem;
`;
