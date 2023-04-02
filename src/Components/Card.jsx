import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

const Container = styled("div")`
  width: 250px;
  height: 30rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 20px;
  border: 2px solid grey;
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 0.2rem;
`;

const Picture = styled("div")``;

const Image = styled("img")`
  width: 100%;
  height: 150px;
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

const Details = styled("div")`
  margin-left: 1rem;
  color: green;
  font-size: 15px;
  font-weight: 900;
`;

const Description = styled("div")`
  margin-left: 1rem;
`;

export default function Card({ id, image, info, price, name, removeTour2 }) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore
    ? `${info.substring(0, 240)}`
    : `${info.substring(0, 200)}....`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <Container>
        <div>
          <Picture>
            <Image src={image} alt="image" />
          </Picture>
          <Details>
            <h4>${price}</h4>
            <h4 style={{ color: "black" }}>{name}</h4>
          </Details>
          <Description>
            {description}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => readMoreHandler()}
            >
              {readMore ? "Show less" : "read more"}
            </span>
          </Description>
        </div>
        <Button onClick={() => removeTour2(id)}>Not Interested</Button>
      </Container>
    </>
  );
}
