import React from 'react';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled, { css } from 'styled-components';
import TailwindComponent from './components/TailwindComponent';
const Container = styled.div`
    display:flex;
`;
const Button = styled.button`
    background: transparent;
    border-radius:3px;
    border: 2px solid #3c5b69;
    color:#b9eaff;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${(props) => props.primary && css`
     background: #009cd5;
     color: white;
    `};
`

export default function App() {
    return (
        <div>
            <Button1></Button1>
            <Button2></Button2>
            <Button>Normal</Button>
            <Button primary>Primary Button</Button>
            <Container></Container>
            <TailwindComponent></TailwindComponent>
        </div>
    );
}

