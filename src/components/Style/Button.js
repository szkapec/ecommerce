import styled from 'styled-components';

export const ButtonCoutainer = styled.button`
text-transform: capitalize;

background: ${props => props.cart?"#0097e6":'transparent'};
border: 2px solid #bdc3c7;
border-color: ${props => props.cart?"#0097e6": "#0097e6"};
color: ${props => props.cart? "white" : "#0097e6" };
border-radius: 8px;
padding: 5px 10px;
cursor: pointer;
margin: 0;
transition: all 0.5s ease-in-out;

i {
    margin-right: 3px;
}

:hover{
    background-color: ${props => props.cart?"white":"#0097e6"};
    color: ${props => props.cart?"#0097e6": "white"};
    border: 2px solid ${props => props.cart?"#0097e6": "#0097e6"};
}
:focus {
    outline: none;
}

/* @media(min-width: 450px){
    font-size: 1rem;
}

@media(min-width: 600px){
    font-size: 1.4rem;
} */
`