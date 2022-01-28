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
	flex: 0 0 40%;
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
