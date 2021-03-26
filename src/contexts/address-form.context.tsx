import React, { useState } from 'react';
import { createContext } from 'use-context-selector';
import AddressSearchForm from '../components/forms/address-search-form/AddressSearchForm';
import { AddressForm } from '../models/address-form.model';

export const AddressFormContext = createContext({
  // Values
  formValues: {} as AddressForm,
  savedAddresses: [] as AddressForm[],
  showAddressForm: false,
  addressOptions: [] as string[],

  // Function
  setFormValues: (value: any) => { },
  formValueChangeHandler: (prop: keyof AddressForm) => (event: any) => { },
  setShowAddressForm: (value: boolean) => { },
  setSavedAddresses: (value: any) => { },
  setAddressOptions: (value: any) => { },
  resetForm: () => {},
});

export const AddressFormContextProvider: React.FC = ({ children }) => {
  const [savedAddresses, setSavedAddresses] = useState<AddressForm[]>([]);
  const [formValues, setFormValues] = useState<AddressForm>({
    year: '',
    month: '',
    postCodeSearch: '',
    address: '',
    line1: '',
    line2: '',
    city: '',
    postCode: '',
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressOptions, setAddressOptions] = useState([]);

  const formValueChangeHandler = (prop: keyof AddressForm) => (event: any) => {
    setFormValues({ ...formValues, [prop]: event.target.value })
  }

  const resetForm = () => {
    setFormValues({
      year: '',
      month: '',
      postCodeSearch: '',
      address: '',
      line1: '',
      line2: '',
      city: '',
      postCode: '',
    });
    setShowAddressForm(false);
    setAddressOptions([]);
  }

  return (
    <AddressFormContext.Provider
      value={{
        formValues,
        formValueChangeHandler,
        showAddressForm,
        savedAddresses,
        addressOptions,
        setFormValues,
        setShowAddressForm,
        setSavedAddresses,
        setAddressOptions,
        resetForm,
      }}
    >
      {children}
    </AddressFormContext.Provider>
  )
};

export default AddressFormContextProvider;
