import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import fakeData from '../fakeData/operators.json';
import { motion } from 'framer-motion';
import MyForm from '../components/form/PaymentForm.form';
import { FormattedMessage } from 'react-intl';

interface Values {
  fakeData: Array<Object>;
}

const Root = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 15px;
`;

const SelectedOperator = styled.h1`
  font-size: 41px;
  font-family: 'Officina Serif' !important;
  font-weight: 700 !important;
  padding: 100px 0 40px;
  color: black;

  @media (max-width: 320px) {
    font-size: 21px;
    padding: 80px 0 30px;
  }

  @media (max-width: 375px) {
    font-size: 21px;
    padding: 80px 0 30px;
  }

  @media (max-width: 360px) {
    font-size: 21px;
    padding: 80px 0 30px;
  }
`;

const Payment: React.FC<Values> = () => {
  const { id } = useParams();

  const operator = (fake) => {
    return fake.id == id;
  };
  return (
    <Root>
      <motion.div
        initial={{ x: 280 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}>
        <SelectedOperator>
          <FormattedMessage id="selectedOperator" defaultMessage="Выбранный оператор: " />
          {fakeData.find(operator).name}
        </SelectedOperator>
      </motion.div>
      <MyForm />
    </Root>
  );
};

export default Payment;
