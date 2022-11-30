import styled from 'styled-components';

export const CategoryList = styled.span`
  font-size: 30px;
  font-weight: ${props => props.theme.fontWeights.bold};
  padding-left: 30px;
  color: ${props => props.theme.colors.white};
`;

export const StatisticsList = styled.ul`
  background-color: ${props => props.theme.colors.black};
  border-radius: 15px;
`;
