import styled from "styled-components";
import { ORANGE } from "../constants/colors";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HiddenParamButton = styled.button`
  display: inline-block;
  background-color: ${ORANGE};
  border: 0;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  color: white;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default function HiddenParams({
  hiddenParams,
  onParamClick,
}: {
  hiddenParams: paramName[];
  onParamClick: (a: paramName) => void;
}) {
  return (
    <div>
      {hiddenParams.length > 0 && <h3>Hidden params</h3>}
      {hiddenParams.map((param) => (
        <HiddenParamButton key={param[0]} onClick={() => onParamClick(param)}>
          {param[1]} <FontAwesomeIcon icon={faXmark} />
        </HiddenParamButton>
      ))}
    </div>
  );
}
