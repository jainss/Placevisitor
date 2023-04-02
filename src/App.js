import styled from "@emotion/styled";
import "./App.css";
import Cards from "./Components/Cards";
import { useState } from "react";
import data from "./data";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Text = styled("div")`
  text-align: center;
  width: 25rem;
  margin: auto;
  margin-top: 3rem;
  border-radius: 1rem;
  border-style: dashed;
  border-color: blue;
  border-width: thick;
  padding: 0.1rem;
`;

const Para = styled("h1")`
  font-weight: 900;
`;

const Button = styled("button")`
  background-color: white;
  color: black;
  width: 9rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid orange;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;

function App() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <Wrapper>
        <h2>No Tours left</h2>
        <Button onClick={() => setTours(data)}>Refresh</Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Text>
        <Para>Place with Love</Para>
      </Text>
      <Cards tours={tours} removeTour={removeTour} />
    </Wrapper>
  );
}

export default App;
