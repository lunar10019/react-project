import React, { useState, ReactElement } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PaymentSchema } from './PaymentSchema';
import Forma from './PaymentForm.form';
import { FormattedMessage } from 'react-intl';

///STYLE
const BlockForm = styled.section`
  display: inline-block;
  align-self: center;
  align-items: center;
  /* padding: 30px 80px 60px 80px; */
  background: white;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: 320px) {
    margin: auto;
    align-self: flex-start;
    align-items: flex-start;
    padding: 10px 50px 30px 50px;
  }
`;

const Title = styled.h1`
  margin-bottom: 60px;
  font-size: 30px;
  font-family: 'Officina Serif' !important;
  font-weight: 700 !important;
  color: #120338;

  @media (max-width: 320px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
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

//Компонент
const MyForm: React.FC = (props) => {
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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
      <BlockForm>
        <div>
          <Title>
            <FormattedMessage id="replenishAccounts" defaultMessage="Пополнить счёт" />
          </Title>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={PaymentSchema}
          component={(): ReactElement => <Forma isLoading={isLoading} />}></Formik>
      </BlockForm>
    </motion.div>
  );
};

export default MyForm;
