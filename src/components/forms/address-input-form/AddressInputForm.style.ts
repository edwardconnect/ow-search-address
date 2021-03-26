import styled, { keyframes } from 'styled-components';

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 0;
  }
`;

const StyledForm = styled.form`
  margin-bottom: 30px;
  padding-top: 20px;

  img {
    display: block;
    margin: 0 auto;
    width: 14px;
    padding-bottom: 20px;
    animation: ${slideDownAnimation} 1.2s infinite ease;
  }
`;

const SubmitFormButton =styled.button`
  background: white;
  border-radius: 50px;
  border: 1px solid red;
  color: red;
  display: block;
  font-size: 18px;
  margin: 0 auto;
  padding: 15px 100px;
`;

export default {
  StyledForm,
  SubmitFormButton,
};
