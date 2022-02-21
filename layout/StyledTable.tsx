import styled from "styled-components";
import { ORANGE } from "../constants/colors";

const Table = styled.table`
  display: grid;
  grid-template-columns: minmax(auto, max-content);
  grid-template-rows: auto auto;
  grid-template-areas: "head body";
  gap: 1px;
  margin-top: 2rem;

  thead {
    grid-area: head;
    display: flex;
    flex-shrink: 0;
    min-width: min-content;
  }

  tbody {
    grid-area: body;
    display: flex;
  }

  tr {
    display: flex;
    flex-direction: column;
  }

  td,
  th {
    display: block;
    text-align: left;
    padding: 1rem;
  }

  th.param,
  td.param {
    outline: 1px solid rgb(200, 200, 200);
    background-color: #f1f1f1;
  }

  td.param:nth-child(odd),
  th.param:nth-child(odd) {
    background-color: #fff;
  }

  th.title-heading,
  td.title-content {
    background: transparent;
  }

  th.title-heading {
    text-indent: 200%;
    white-space: nowrap;
    overflow: hidden;
  }

  td.title-content {
    text-align: center;
    color: ${ORANGE};
    font-weight: bold;
  }
`;

export default Table;
