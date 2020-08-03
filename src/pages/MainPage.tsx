import React from 'react';
import ImgMediaCard1 from '../components/ArtDesign/Card';
import { motion } from 'framer-motion';
import fakeData from '../fakeData/operators.json';
import styled from 'styled-components';

const H = styled.h1`
  font-size: 41px;
  font-family: 'Officina Serif' !important;
  font-weight: 700 !important;
  padding: 100px 0 40px;
  color: black;
`;

const Main = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -20 }}
        transition={{ delay: 0.2, type: 'spring' }}>
        <H>Выберите оператора</H>
      </motion.div>
      <div className="grid">
        {fakeData.map((operator) => (
          <div>
            <ImgMediaCard1
              alt={operator.alt}
              image={operator.url}
              title={operator.title}
              id={operator.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
