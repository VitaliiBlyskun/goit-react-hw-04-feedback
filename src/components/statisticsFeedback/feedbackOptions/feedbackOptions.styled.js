import styled from 'styled-components';

export const Button = styled.button`
padding: 10px 20px;
background-color: black;
color: white;
border-radius: 10%;
font-size: 20px;
font-weight: bold;
cursor: pointer;

:hover,
:focus {
    background-color: white;
    color: black;
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


