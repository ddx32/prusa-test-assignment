import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: #a9a9a9;

  &:hover {
    color: #7a7a7a;
  }
`;

const HeadingCell = styled.th`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default function TableHeading({
  param,
  eyeClick,
}: {
  param: paramName;
  eyeClick: (a: React.MouseEvent) => void;
}) {
  return (
    <HeadingCell className="param">
      <span className="title-text">{param[1]}</span>
      <IconButton onClick={eyeClick}>
        <FontAwesomeIcon icon={faEye} />
      </IconButton>
    </HeadingCell>
  );
}
