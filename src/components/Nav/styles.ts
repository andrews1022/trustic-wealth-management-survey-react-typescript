import styled from 'styled-components';

export const Nav = styled.nav`
	position: absolute;
	top: 5%;
	right: 5%;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		padding: 2.5% 0 5% 0;
		position: static;
	}
`;

export const List = styled.ul`
	display: flex;

	@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
		justify-content: center;
	}
`;

export const Item = styled.li`
	&:first-of-type {
		margin-right: 0.5rem;

		@media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
			margin-right: 0;
		}
	}
`;
