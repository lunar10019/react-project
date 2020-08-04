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
    /* background: mediumseagreen; */
    font-size: 21px;
  }
`;

const ContainerPayment = styled.section`
  display: flex;
  justify-content: start;
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
