import React, { useMemo, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { AddressFormContext } from '../../../contexts/address-form.context';
import { AddressForm } from '../../../models/address-form.model';
import { searchAddressByPostCode } from '../../../services/get-address.service';
import FormInput from '../../form-inputs/FormInput/FormInput';
import FormSelect from '../../form-inputs/FormSelect/FormSelect';
import FormInputErrorMessage from '../../form-layout/FormInputWrapper/FormInputErrorMessage';
import FormInputWrapper from '../../form-layout/FormInputWrapper/FormInputWrapper';

import Styles from './AddressSearchForm.style';

const AddressSearchForm: React.FC = () => {
  const formValueChangeHandler = useContextSelector(AddressFormContext, context => context.formValueChangeHandler);
  const postCodeSearch = useContextSelector(AddressFormContext, context => context.formValues && context.formValues.postCodeSearch);
  const setFormValues = useContextSelector(AddressFormContext, context => context.setFormValues);
  const formValues = useContextSelector(AddressFormContext, context => context.formValues);
  const setShowAddressForm = useContextSelector(AddressFormContext, context => context.setShowAddressForm);
  const addressOptions = useContextSelector(AddressFormContext, context => context.addressOptions);
  const setAddressOptions = useContextSelector(AddressFormContext, context => context.setAddressOptions);
  const [errors, setErrors] = useState({
    invalidPostCode: false
  })

  const yearsOptions: string[] = useMemo(() => {
    return Array(10).fill(null).map((it, idx) => {
      if (idx < 1) {
        return `${idx + 1} year`
      } else if (idx > 8) {
        return `More than ${idx + 1} years`
      } else {
        return `${idx + 1} years`;
      }
    })
  }, []);
  const monthOptions: string[] = useMemo(() => {
    return Array(11).fill(null).map((it, idx) => {
      if (idx < 1) {
        return `${idx + 1} month`
      }
      return `${idx + 1} months`;
    })
  }, []);

  const submitPostCodeHandler = async (event: any) => {
    event.preventDefault();

    if (postCodeSearch === '') {
      return;
    }

    try {
      const res = await searchAddressByPostCode(postCodeSearch)

      if (res && res.data && res.data.addresses) {
        const opts = res.data.addresses.map((address: any) => {
          const value = `${address.line_1}, ${address.line_2}, ${address.town_or_city} ,${res.data.postcode}, ${address.country}`;
          return value;
        })
        setAddressOptions(opts);
        setShowAddressForm(false);

        setErrors({
          invalidPostCode: false,
        });
      }
    } catch (err) {
      setErrors({
        invalidPostCode: true,
      });
    }
  }

  const options = useMemo(() => addressOptions ? addressOptions.map((it, idx) => (
    <option key={idx} value={it}>{it}</option>
  )) : [], [addressOptions])

  const changeSearchAddressHandler = (event: any) => {
    const address = event.target.value.split(',').map((it: string) => it.trim());
    // setFormValues({
    //   ...formValues,
    //   address: event.target.value,
    // })
    setShowAddressForm(true);
    setFormValues((prev: AddressForm) => {
      return {
        ...prev,
        line1: address[0],
        line2: address[1],
        city: address[2],
        postCode: address[3],
        address: event.target.value,
      }
    })
  }

  return (
    <>
      <FormInputWrapper label="How long have you lived at your current address?">
        <Styles.LiveDurationSelectsWrapper>
          <FormSelect
            name="year"
            onChange={formValueChangeHandler('year')}
            value={formValues.year}
            data-testid="select_year"
          >
            <option value="">Select years</option>
            {
              yearsOptions && yearsOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))
            }
          </FormSelect>
          <FormSelect
            name="month"
            onChange={formValueChangeHandler('month')}
            value={formValues.month}
            data-testid="select_month"
          >
            <option value="">Select months</option>
            {
              monthOptions && monthOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))
            }
          </FormSelect>
        </Styles.LiveDurationSelectsWrapper>
      </FormInputWrapper>
      <Styles.StyledForm onSubmit={submitPostCodeHandler}>
        <FormInputWrapper label="Postcode search">
          <Styles.PostCodeInputWrapper>
            <FormInput
              name="search_post_code"
              value={postCodeSearch}
              onChange={formValueChangeHandler('postCodeSearch')}
              placeholder="Enter postcode"
              data-testid="search_postcode"
            />
            <Styles.SubmitPostCodeButton data-testid="submit_postcode_form"  type="submit">
              <Styles.SearchIcon src="/icons/magnifying-glass.png" />
            </Styles.SubmitPostCodeButton>
            {errors && errors.invalidPostCode && (
              <FormInputErrorMessage>Invalid Post code. Please try again.</FormInputErrorMessage>
            )}

          </Styles.PostCodeInputWrapper>
        </FormInputWrapper>
        {
          addressOptions && addressOptions.length > 0 && (
            <FormInputWrapper label="Address">
              <FormSelect
                name="address"
                value={formValues.address}
                onChange={changeSearchAddressHandler}
                data-testid="search_address"
              >
                <option value="">Select your address</option>
                {options}
              </FormSelect>
            </FormInputWrapper>
          )
        }
      </Styles.StyledForm>
    </>
  )
};

export default AddressSearchForm;