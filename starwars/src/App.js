import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import MovieCard from "./components/MovieCard";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const BigDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const App = () => {

  const [data, setData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log("APP: response.data.results", response.data.results)
      setData(response.data.results);
    })
    .catch((error) => {
      console.log("Error :(", error)
    })
  }, [])

  return (
    <div>
      <Title/>

      <BigDiv>
        {data.map((item, index) => {
          return (
            <MovieCard
            key = {index}
            name = {item.name}
            height = {item.name}
            mass = {item.mass}
            birth = {item.birth_year}
            gender = {item.gender}
            />
          )
        })}
      </BigDiv>
    </div>
  );
}

export default App;
