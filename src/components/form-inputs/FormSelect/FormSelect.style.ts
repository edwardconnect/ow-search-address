import styled from 'styled-components';

const StyledSelect = styled.select`
  background: none;
  border: 1px solid white;
  color: white;
  width: 100%;
  font-size: 16px;
  padding: 12px 8px;

  option {
    color: black;
  }

  /* option:first-child {
    color: red;
  }

  option:not(:first-of-type) {
    color: black;
  } */
`;

export default {
  StyledSelect,
};
