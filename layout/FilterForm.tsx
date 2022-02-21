import styled from "styled-components";

const FilterForm = styled.section`
  .search-form {
    label {
      font-weight: bold;
      font-size: 1rem;
      margin: 1rem 0;
      display: block;
    }

    input {
      display: block;
      padding: 0.5rem;
      width: 20rem;
      font-size: 1.2rem;
    }
  }

  .filters {
    label {
      display: block;
    }
  }
`;

export default FilterForm;
