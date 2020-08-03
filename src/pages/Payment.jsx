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
`;

const ContainerPayment = styled.section`
  display: flex;
  /* align-self: center; */
  justify-content: center;
`;

const Payment = () => {
  const { id } = useParams();

  const operator = (fake) => {
    return fake.id == id;
  };
  return (
    <div>
      <motion.div initial={{ x: 850 }} animate={{ x: 20 }} transition={{ ease: 'easeOut' }}>
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
