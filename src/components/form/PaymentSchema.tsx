import * as Yup from 'yup';
import { defineMessages } from 'react-intl';

const i18n = defineMessages({
  phoneRequired: {
    id: 'phoneRequired',
    defaultMessage: 'Введите номер',
  },
  invalidNumber: {
    id: 'invalidNumber',
    defaultMessage: 'Некорректный номер',
  },
  amountLimit: {
    id: 'amountLimit',
    defaultMessage: 'Сумма не должна превышать 1000₽',
  },

  enterAmount: {
    id: 'enterAmount',
    defaultMessage: 'Введите сумму платежа',
  },
});

const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const PaymentSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required(i18n.phoneRequired.id)
    .matches(phoneRegExp, i18n.invalidNumber.id),
  price: Yup.number().min(1, '').max(1000, i18n.amountLimit.id).required(i18n.enterAmount.id),
});
