import React from 'react';
import { render} from '@testing-library/react';
import AppHeader from '../../components/layout/AppHeader/AppHeader';

test('Should show correct header text', () => {
  const { queryByText } = render(<AppHeader />)
  expect(queryByText('Address Search')).not.toBeNull();
  expect(queryByText('Please enter your address')).not.toBeNull();
})
