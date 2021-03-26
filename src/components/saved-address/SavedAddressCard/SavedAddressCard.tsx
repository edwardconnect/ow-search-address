import React from 'react';

import { AddressForm } from '../../../models/address-form.model';
import Styles from './SavedAddressCard.style';

interface SavedAddressCardProps extends AddressForm {
  onDelete: () => void;
}

export const SavedAddressCard: React.FC<SavedAddressCardProps> = (props) => {
  return (
    <Styles.StyledCard>
      <div>{`${props.line1}, ${props.line2}, ${props.city}, ${props.postCode}`}</div>
      {
        (props.month || props.year) && (
          <div>
            Time address: {props.year} {props.month}
          </div>
        )
      }
      <Styles.DeleteButton type="button" onClick={props.onDelete}>
        <img src="/icons/delete.png" alt="delete_icon"/>
      </Styles.DeleteButton>
    </Styles.StyledCard>
  )
};

export default SavedAddressCard;
