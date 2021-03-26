import React from 'react';

import Styles from './FormInputWrapper.style';

interface FormInputWrapperProps {
  label: string;
  children: React.ReactNode;
}

const FormInputWrapper: React.FC<FormInputWrapperProps> = ({
  label,
  children,
}) => (
  <Styles.StyledWrapper>
    <Styles.StyledLabel>{label}</Styles.StyledLabel>
    {children}
  </Styles.StyledWrapper>
);

export default FormInputWrapper;
