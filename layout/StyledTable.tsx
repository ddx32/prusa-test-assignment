import styled from "styled-components";

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
    display: block;
    text-align: left;
    border: 1px solid rgb(200, 200, 200);
    padding: 1rem;
  }

  td {
    border-left: 0;
  }

  th:not(:last-child),
  td:not(:last-child) {
    border-bottom: 0;
  }

  td:nth-child(odd),
  th:nth-child(odd) {
    background-color: #fff;
  }
`;

export default Table;
