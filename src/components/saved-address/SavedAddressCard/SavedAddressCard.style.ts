import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid white;
  background: rgb(0, 0, 0, 0.1);
  padding: 20px 12px;
  position: relative;
  margin-bottom: 20px;
  color: white;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  top: 20px;
  right: 10px;
  position: absolute;

  img {
    width: 16px;
  }
`;

export default {
  StyledCard,
  DeleteButton
};
