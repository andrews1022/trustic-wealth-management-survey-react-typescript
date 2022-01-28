import styled from 'styled-components';

// shared styles
import { DividerStyles } from '../../styles/lib';

// props
interface IsSelected {
	isSelected: boolean;
}

interface PercentageBarProps extends IsSelected {
	width: number;
}

// styled components
export const Wrapper = styled.div`
	h2 {
		text-align: center;
	}
`;

export const List = styled.ul`
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

export const Item = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 1.25rem;
	}
`;

export const Text = styled.span<IsSelected>`
	color: ${({ isSelected, theme }) =>
		isSelected ? theme.colors.supernova : theme.colors.gulfBlue};
`;

export const PercentageBar = styled.div<PercentageBarProps>`
	background-color: ${({ isSelected, theme }) =>
		isSelected ? theme.colors.supernova : theme.colors.gulfBlue};
	height: 1.25rem;
	width: ${({ width }) => width}%;
`;

export const RestartWrapper = styled.div`
	text-align: center;
`;

export const Divider = styled.div`
	${DividerStyles};
`;
