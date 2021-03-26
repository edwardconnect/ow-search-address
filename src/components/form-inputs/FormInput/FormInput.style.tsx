import styled from 'styled-components';

const StyledInput: any = styled.input<any>`
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  width: 100%;
  padding: 12px 8px;

  &:focus {
    outline: white;
  }

  &::placeholder {
    color: white;
  }
`;

export default {
  StyledInput
};
