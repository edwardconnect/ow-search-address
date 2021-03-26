import React from 'react';
import { cleanup, fireEvent,  render, screen, waitFor } from '@testing-library/react';
import AddressSearchForm from '../../components/forms/address-search-form/AddressSearchForm';
import AddressFormContextProvider from '../../contexts/address-form.context';
import userEvent from '@testing-library/user-event';

const TestComponent = () => (
  <AddressFormContextProvider>
    <AddressSearchForm />
  </AddressFormContextProvider>
)

describe('Test AddressSearchForm', () => {
  afterAll(() => {
    cleanup();
  })
  it('Should show select month', () => {
    render(<TestComponent />);
    expect(screen.queryByTestId('select_year')).toBeTruthy();
  })

  it('Test select months', () => {
    render(<TestComponent />);
    userEvent.selectOptions(screen.queryByTestId('select_year'), ['1 year']);
    expect(screen.queryByTestId('select_year')?.querySelector('option[value="1 year"]').selected).toBe(true);
  });

  it('Should show 11 months options', () => {
    render(<TestComponent />);
    const options = screen.queryByTestId('select_year')
    expect(options.length).toBe(11);
  });

  it('Should show address select', async () => {
    render(<TestComponent />);
    const input = screen.queryByTestId('search_postcode') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'e16an' } });
    userEvent.click(screen.queryByTestId('submit_postcode_form'));
    await waitFor(() => {
      expect(screen.queryByTestId('search_address')).toBeTruthy();
    })
  })
});