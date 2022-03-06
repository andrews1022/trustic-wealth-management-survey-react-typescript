import styled from 'styled-components';

export const Divider = styled.div`
  height: 0.125rem;
  width: 3rem;
  background-color: ${({ theme }) => theme.colors.gulfBlue};
  margin: 2.5% auto;

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    width: 4rem;
  }

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    margin: 5% auto;
  }

  @media ${({ theme }) => theme.mediaQueries.mobileMedium} {
    margin: 10% auto;
  }
`;
