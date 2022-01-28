import styled from 'styled-components';

export const Wrapper = styled.div``;

export const InnerWrapper = styled.div`
	padding: 4.25% 5% 0 5%;

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		padding: 4.25% 7.5% 0 7.5%;
	}
`;

export const HeroTextWrapper = styled.header`
	text-align: center;

	h1,
	h2 {
		margin-bottom: 2%;
	}

	p {
		color: ${({ theme }) => theme.colors.lochmara};
	}
`;

export const SelectionsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1%;

	@media ${({ theme }) => theme.mediaQueries.mobileLarge} {
		margin-top: 3%;
		margin-bottom: 3%;
	}

	p {
		color: ${({ theme }) => theme.colors.supernova};
		font-size: 1.125rem;
		font-weight: 600;
	}
`;

export const SelectionsBox = styled.div`
	height: 1.125rem;
	width: 1.125rem;
	background-color: ${({ theme }) => theme.colors.supernova};
	margin-right: 0.25rem;
`;

export const Divider = styled.div`
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

export const RestartWrapper = styled.div`
	text-align: center;

	h2 {
		margin-bottom: 2%;
	}
`;
