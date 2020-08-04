import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData/operators.json';
import Forma from '../components/form/Forma';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const H = styled.h1`
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

const ContainerPayment = styled.section`
  display: flex;
  justify-content: start;

  @media (max-width: 320px) {
    font-size: 21px;
    justify-content: center;
  }

  @media (max-width: 375px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const Payment = () => {
  const { id } = useParams();

  const operator = (fake) => {
    return fake.id == id;
  };
  return (
    <div>
      <motion.div
        initial={{ x: 280 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}>
        <H>Выбранный оператор: {fakeData.find(operator).name}</H>
      </motion.div>

      <ContainerPayment>
        <div>
          <Forma />
        </div>
      </ContainerPayment>
    </div>
  );
};

export default Payment;
