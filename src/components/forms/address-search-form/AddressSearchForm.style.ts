import styled from 'styled-components'

const StyledForm = styled.form``;

const PostCodeInputWrapper = styled.div`
  position: relative;
`;

const SubmitPostCodeButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  height: 44.5px;
  justify-content: center;
  top: 0px;
  right: 10px;
  position: absolute;
`;

const SearchIcon = styled.img`
  width: 20px;
`;

const LiveDurationSelectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  select:first-child {
    margin-right: 15px;
  }
`;

export default {
  StyledForm,
  PostCodeInputWrapper,
  SearchIcon,
  SubmitPostCodeButton,
  LiveDurationSelectsWrapper
};
