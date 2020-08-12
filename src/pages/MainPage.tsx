import React, { Fragment } from 'react';
import ImgMediaCard1 from '../components/card/Card';
import { motion } from 'framer-motion';
import fakeData from '../fakeData/operators.json';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Choose = styled.h1`
  font-size: 41px;
  font-family: 'Officina Serif' !important;
  font-weight: 700 !important;
  padding: 200px 0 40px;
  color: black;

  @media (max-width: 375px) {
    font-size: 30px;
    padding: 70px 0 10px;
  }

  @media (max-width: 320px) {
    font-size: 25px;
    padding: 70px 0 10px;
  }
`;

const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px 70px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1380px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 20px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 50px 20px;
    justify-items: start;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 50px 20px;
    justify-items: start;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    justify-items: center;
  }

  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    justify-items: center;
  }
`;

const Main = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -20 }}
        transition={{ delay: 0.2, type: 'spring' }}>
        <Choose>
          <FormattedMessage id="chooseOperator" defaultMessage="Выберите оператора" />
        </Choose>
      </motion.div>
      <Grid>
        {fakeData.map((operator) => (
          <Fragment key={operator.id}>
            <ImgMediaCard1
              alt={operator.alt}
              image={operator.url}
              title={operator.title}
              id={operator.id}
            />
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Main;
