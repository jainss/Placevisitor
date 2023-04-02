import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Card from "./Card";

const Wrapper = styled("div")`
  margin-top: 3rem;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;
export default function Cards({ tours, removeTour }) {
  const removeTour2 = (id) => {
    removeTour(id);
  };
  const [places, setPlaces] = useState([]);

  return (
    <Wrapper>
      {tours.map((val) => {
        return <Card {...val} key={val.id} removeTour2={removeTour2} />;
      })}
    </Wrapper>
  );
}
