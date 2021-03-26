import React from 'react';
import { useContextSelector } from 'use-context-selector';

import { AddressFormContext } from '../../../contexts/address-form.context';
import { AddressForm } from '../../../models/address-form.model';
import FormInput from '../../form-inputs/FormInput/FormInput';
import FormInputErrorMessage from '../../form-layout/FormInputWrapper/FormInputErrorMessage';
import FormInputWrapper from '../../form-layout/FormInputWrapper/FormInputWrapper';
import Styles from './AddressInputForm.style';

const AddressInputForm: React.FC = () => {
  const showAddressForm = useContextSelector(AddressFormContext, context => context.showAddressForm);
  const setSavedAddresses = useContextSelector(AddressFormContext, context => context.setSavedAddresses);
  const formValues = useContextSelector(AddressFormContext, context => context.formValues);
  const formValueChangeHandler = useContextSelector(AddressFormContext, context => context.formValueChangeHandler);
  const resetForm = useContextSelector(AddressFormContext, context => context.resetForm);

  const submitFormHandler = (event: any) => {
    event.preventDefault();
    if (
      formValues.line1 !== '' &&
      formValues.line2 !== '' &&
      formValues.city !== '' &&
      formValues.postCode !== ''
    ) {
      const { postCodeSearch, address, ...newAddress } = formValues;
      setSavedAddresses((prev: AddressForm[]) => {
        return [newAddress, ...prev];
      });
      resetForm();
    }
  }

  return showAddressForm ? (
    <Styles.StyledForm onSubmit={submitFormHandler}>
      <FormInputWrapper label="Address line 1*">
        <FormInput
          name="line1"
          value={formValues.line1}
          onChange={formValueChangeHandler('line1')}
        />
        {formValues.line1 === '' && <FormInputErrorMessage>Required</FormInputErrorMessage>}
      </FormInputWrapper>
      <FormInputWrapper label="Address line 2">
        <FormInput
          name="line2"
          value={formValues.line2}
          onChange={formValueChangeHandler('line2')}
        />
        {formValues.line2 === '' && <FormInputErrorMessage>Required</FormInputErrorMessage>}
      </FormInputWrapper>
      <FormInputWrapper label="City *">
        <FormInput
          name="city"
          value={formValues.city}
          onChange={formValueChangeHandler('city')}
        />
        {formValues.city === '' && <FormInputErrorMessage>Required</FormInputErrorMessage>}
      </FormInputWrapper>
      <FormInputWrapper label="Postcode *">
        <FormInput
          name="postcode"
          value={formValues.postCode}
          onChange={formValueChangeHandler('postCode')}
        />
        {formValues.postCode === '' && <FormInputErrorMessage>Required</FormInputErrorMessage>}
      </FormInputWrapper>
      <Styles.SubmitFormButton type="submit">
        Add address
      </Styles.SubmitFormButton>
    </Styles.StyledForm>
  ) : null;
};

export default AddressInputForm;
