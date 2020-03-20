import React from 'react'
import styled from "styled-components";

const Cards = styled.div`
    text-align: center;
    border: 1px solid red;
    color: red;
    width: 40%;
    flex-wrap: wrap;
    margin: 5% auto;
`;

const Bubble = styled.p`
background: steelblue;
color: white;
padding: .25em .4em;
font-size: 75%;
font-weight: 700;
line-height: 1;
text-align: center;
white-space: nowrap;
border-radius: .25rem;
width: 25vw;
margin: 4% auto;
`;

// const SmallDiv = styled.div`
//     height: 200px;
//     min-height: 100%;
//     margin-bottom: -100px;
//     padding-bottom: 100px;
// `;

export default function MovieCard(props) {
    return (
        <Cards>
        <h1>Name: {props.name}</h1>
        <h2>Height: {props.height}</h2>
        {/* <SmallDiv> */}
            <Bubble>Gender: {props.gender}</Bubble>
            <Bubble>Birth: {props.birth}</Bubble>
            <Bubble>Mass: {props.mass}</Bubble>
        {/* </SmallDiv> */}
        </Cards>
    )
}
