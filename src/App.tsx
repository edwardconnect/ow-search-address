import React from 'react';
import './App.css';
import AppContainer from './components/layout/AppContainer/AppContainer';
import AddressSearchForm from './components/forms/address-search-form/AddressSearchForm';
import AddressFormContextProvider from './contexts/address-form.context';
import AddressInputForm from './components/forms/address-input-form/AddressInputForm';
import SavedAddressList from './components/saved-address/SavedAddressList/SavedAddressList';
import AppHeader from './components/layout/AppHeader/AppHeader';

function App() {
  return (
    <AddressFormContextProvider>
      <AppContainer>
        <AppHeader />
        <SavedAddressList />
        <AddressSearchForm />
        <AddressInputForm />
      </AppContainer>
    </AddressFormContextProvider>
  );
}

export default App;
