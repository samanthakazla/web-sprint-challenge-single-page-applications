import React from 'react'
import styled from 'styled-components';



const H1 = styled.h1`
color: white;
text-align: center;
font-size: 50px;
background-color: darkblue;

`;

export const home = () => {
    return (
        <div>
            <H1>Welcome to Domino's App</H1>
        </div>
    )
};
export default home;