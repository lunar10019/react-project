import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import MyTextField from './Input';
import MyMaskField from './InputWithMask';
import { motion } from 'framer-motion';
import Button from '@material-ui/core/Button';
import { CircularProgress } from 'material-ui';
import styled from 'styled-components';

///STYLE
const Container = styled.section`
  display: inline-block;
  align-self: center;
  align-items: center;
  padding: 20px 60px 50px 60px;
  background: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Title = styled.h1`
  margin-bottom: 60px;
  font-size: 30px;
  font-family: 'Officina Serif' !important;
  font-weight: 700 !important;
  color: #120338;
`;

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

interface FormValues {
  phoneNumber: string | number;
  price: string;
}

const initialValues: FormValues = {
  phoneNumber: '',
  price: '',
};

interface State {
  textmask: string;
}

const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const PaymentSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Введите номер')
    .matches(phoneRegExp, 'Неправильный номер телефона'),
  price: Yup.number()
    .min(1, '')
    .max(1000, 'Сумма не должна превышать 1000₽')
    .required('Введите сумму платежа'),
});

//Компонент
const Forma: React.FC = (props) => {
  const successMsg = [
    'Оплата мобильной связи прошла успешно!',
    'Произошла ошибка! Повторите операцию',
  ];

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    setLoading(true);
    await sleep(3000);
    setLoading(false);
    await sleep(1);
    alert(successMsg[Math.round(Math.random())]);
  };

  const [values, setValues] = React.useState<State>({
    textmask: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <Container>
        <div>
          <Title>Пополнить счёт</Title>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={PaymentSchema}
          handleChange={handleChange}
          isSubmitting
          // onClick={handleClick}
          // component={MyForm}
          dirty>
          {(props) => {
            // props.isSubmitting;
            return (
              <Form>
                <div className="form1">
                  <MyMaskField
                    variant="outlined"
                    label="Номер телефона"
                    textmask=""
                    name="phoneNumber"
                    id="phoneNumber"
                    type="string"
                    required
                  />
                  <div>
                    <MyTextField
                      variant="outlined"
                      label="Сумма платежа"
                      name="price"
                      id="price"
                      type="number"
                      required
                    />
                  </div>
                </div>

                <div>
                  {!isLoading && (
                    <Button variant="outlined" type="submit">
                      Оплатить
                    </Button>
                  )}
                  {isLoading && (
                    <Button variant="outlined" type="submit" disabled>
                      Оплата...
                      <CircularProgress color="#6200ea" />
                    </Button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </motion.div>
  );
};

export default Forma;
