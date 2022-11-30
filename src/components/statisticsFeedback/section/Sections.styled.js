import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.black};
  border-radius: 15px;
`;

export const MainTitle = styled.h2`
  margin-top: 0;
  font-family: ${props => props.theme.fonts.accent};
  text-align: center;
  font-size: 40px;
`;
