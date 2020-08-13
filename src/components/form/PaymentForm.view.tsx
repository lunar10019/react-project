import React, { ReactElement, Fragment } from 'react';
import { Form } from 'formik';
import MyTextField from './Input';
import MyMaskField from './InputWithMask';
import Button from '@material-ui/core/Button';
import { CircularProgress } from 'material-ui';
import { injectIntl, FormattedMessage, defineMessages } from 'react-intl';

const i18n = defineMessages({
  phoneLabel: {
    id: 'phoneNumber',
    defaultMessage: 'Номер телефона',
  },
  priceLabel: {
    id: 'price',
    defaultMessage: 'Сумма платежа',
  },
});

interface Props {
  isLoading?: boolean;
  intl: any;
}
export const Forma = ({ isLoading = false, intl }: Props): ReactElement<Props> => {
  return (
    <Form>
      <MyMaskField
        variant="outlined"
        label={intl.formatMessage(i18n.phoneLabel)}
        name="phoneNumber"
        id="phoneNumber"
        type="string"
        required
      />

      <MyTextField
        variant="outlined"
        label={intl.formatMessage(i18n.priceLabel)}
        name="price"
        id="price"
        type="number"
        required
      />
      <Fragment>
        {!isLoading && (
          <Button variant="outlined" type="submit">
            <FormattedMessage id="pay" defaultMessage="Оплатить" />
          </Button>
        )}
        {isLoading && (
          <Button variant="outlined" type="submit" disabled>
            <FormattedMessage id="payment" defaultMessage="Оплата" />
            <CircularProgress color="#6200EA" />
          </Button>
        )}
      </Fragment>
    </Form>
  );
};
export default injectIntl(Forma);
