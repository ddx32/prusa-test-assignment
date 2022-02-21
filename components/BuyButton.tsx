import styled from "styled-components";
import { ORANGE } from "../layout/constants";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StyledButton = styled.button`
  background-color: ${ORANGE};
  border: 0;
  border-radius: 3px;
  color: white;
  padding: 0.6rem;
  margin: 0.5rem 0;
  width: 100%;
  max-width: 12rem;
  font-size: 1rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  .buy-text {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

export default function BuyButton({ variant }: { variant: paramName }) {
  return (
    <StyledButton>
      <span className="buy-text">
        <FontAwesomeIcon icon={faCartShopping} /> {variant[1]}
      </span>
      <span className="price">$750</span>
    </StyledButton>
  );
}
