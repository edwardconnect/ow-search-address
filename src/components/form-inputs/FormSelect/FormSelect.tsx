import React from 'react';

import Styles from './FormSelect.style';

import styled from 'styled-components';

const FormSelect = styled.select`
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

// const FormSelect: React.FC = ({children}) => (
//   <Styles.StyledSelect>
//     {children}
//   </Styles.StyledSelect>
// );

export default FormSelect;
