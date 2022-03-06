import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 0 0 47.5%;

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    text-align: center;
  }
`;
