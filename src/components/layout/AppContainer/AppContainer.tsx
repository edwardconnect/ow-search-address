import React from 'react';

import Styles from './AppContainer.style';

const AppContainer: React.FC = ({children}) => (
  <Styles.StyledContainer>
    {children}
  </Styles.StyledContainer>
);

export default AppContainer;
