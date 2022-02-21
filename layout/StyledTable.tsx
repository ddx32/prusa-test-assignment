import styled from "styled-components";
import { ORANGE } from "../constants/colors";

const Table = styled.table`
  display: flex;
  margin: 2rem 0;

  thead {
    display: flex;
    flex-shrink: 0;
    min-width: min-content;
  }

  tbody {
    display: flex;
  }

  tr {
    display: flex;
    flex-direction: column;
  }

  td,
  th {
    text-align: left;
    padding: 1rem;
  }

  th.param,
  td.param {
    border: 1px solid rgb(200, 200, 200);
    border-bottom: 0;
  }

  td.param {
    border-left: 0;
  }

  td.param:nth-child(odd),
  th.param:nth-child(odd) {
    background-color: #fff;
  }

  th.param:last-of-type,
  td.param:last-of-type {
    border-bottom: 1px solid #000;
  }

  th.title-heading,
  td.title-content {
    background: transparent;
    border: none;
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
