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
	width: 90%;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		position: static;
		transform: translate(0, 0);
		width: 100%;
	}
`;
