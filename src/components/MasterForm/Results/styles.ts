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
`;

export const SelectionsWrapper = styled.div`
	margin: 0 auto;
	width: 37.5%;

	p {
		color: ${({ theme }) => theme.colors.lochmara};
	}
`;

export const SelectionsInnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 3%;

	@media ${({ theme }) => theme.mediaQueries.mobileLarge} {
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

export const AnswersWrapper = styled.div`
	h2 {
		margin-bottom: 2%;
		text-align: center;
	}
`;

export const AnswersList = styled.ul`
	margin: 0 auto;
	width: 29%;

	@media ${({ theme }) => theme.mediaQueries.desktopSmall} {
		width: 33%;
	}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		width: 40%;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileLarge} {
		width: 55%;
	}

	@media ${({ theme }) => theme.mediaQueries.mobileMedium} {
		width: 100%;
	}
`;

export const AnswersItem = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 1.25rem;
	}
`;

type AnswersTextProps = {
	isSelected: boolean;
};

export const AnswersText = styled.span<AnswersTextProps>`
	color: ${({ isSelected, theme }) =>
		isSelected ? theme.colors.supernova : theme.colors.gulfBlue};
`;

type AnswersPercentageBarProps = {
	isSelected: boolean;
	width: number;
};

export const AnswersPercentageBar = styled.div<AnswersPercentageBarProps>`
	background-color: ${({ isSelected, theme }) =>
		isSelected ? theme.colors.supernova : theme.colors.gulfBlue};
	height: 1.25rem;
	width: ${(props) => props.width}%;
`;

export const RestartWrapper = styled.div`
	text-align: center;

	h2 {
		margin-bottom: 2%;
	}
`;
