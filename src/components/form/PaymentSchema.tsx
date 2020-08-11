import * as Yup from 'yup';

const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const PaymentSchema = Yup.object().shape({
  phoneNumber: Yup.string().required('Введите номер').matches(phoneRegExp, 'Некорректный номер'),
  price: Yup.number()
    .min(1, '')
    .max(1000, 'Сумма не должна превышать 1000₽')
    .required('Введите сумму платежа'),
});
