import React from 'react';
import { useContextSelector } from 'use-context-selector';
import { AddressFormContext } from '../../../contexts/address-form.context';
import SavedAddressCard from '../SavedAddressCard/SavedAddressCard';

const SavedAddressList = React.memo(() => {
  const savedAddresses = useContextSelector(AddressFormContext, context => context.savedAddresses);
  const setSavedAddresses = useContextSelector(AddressFormContext, context => context.setSavedAddresses);

  const clickDeleteCardHandler = (index: number) => () => {
    setSavedAddresses(savedAddresses.filter((it, addressIdx) => index !== addressIdx));
  }

  return savedAddresses && savedAddresses.length > 0 ? (
    <>
      {savedAddresses.map((address, idx) =>
        <SavedAddressCard
          {...address}
          key={`${idx}_${address.postCode}`}
          onDelete={clickDeleteCardHandler(idx)}
        />
      )}
    </>
  ) : null;
});

export default SavedAddressList;
