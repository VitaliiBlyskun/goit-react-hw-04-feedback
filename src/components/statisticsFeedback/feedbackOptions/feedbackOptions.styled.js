import styled from 'styled-components';

export const Button = styled.button`
padding: 10px 20px;
background-color: ${props => props.theme.colors.black};
color:  ${props => props.theme.colors.white};
border-radius: 10%;
font-size: 20px;
font-weight: ${props => props.theme.fontWeights.bold};
cursor: pointer;

:hover,
:focus {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
}
`;

export const WrapperBtn = styled.ul`
display: flex;
justify-content: space-between;
padding-left: 50px;
padding-right: 50px;
border-radius: 15px;
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
list-style: none;
`;


