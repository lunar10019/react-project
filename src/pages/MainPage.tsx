import React from 'react';
import ImgMediaCard1 from '../components/card/Card';
import { motion } from 'framer-motion';
import fakeData from '../fakeData/operators.json';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Root = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

const Choose = styled.h1`
  margin-left: 20px;
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
  margin: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 50px 70px;
  justify-items: center;
  align-items: center;
`;

const Main = () => {
  return (
    <Root>
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
          <ImgMediaCard1
            key={operator.id}
            alt={operator.alt}
            image={operator.url}
            title={operator.title}
            id={operator.id}
          />
        ))}
      </Grid>
    </Root>
  );
};

export default Main;
