import React, { ReactElement } from 'react';
import { Form, FormikHelpers } from 'formik';
import MyTextField from './Input';
import MyMaskField from './InputWithMask';
import Button from '@material-ui/core/Button';
import { CircularProgress } from 'material-ui';
import styled from 'styled-components';

const Indent = styled.section`
  margin: 25px 0;
`;

interface Props {
  isLoading?: boolean;
}

export const Forma = ({ isLoading = false }: Props): ReactElement<Props> => {
  return (
    <Form>
      <Indent>
        <MyMaskField
          variant="outlined"
          label="Номер телефона"
          textmask=""
          name="phoneNumber"
          id="phoneNumber"
          type="string"
          required
        />
      </Indent>
      <Indent>
        <MyTextField
          variant="outlined"
          label="Сумма платежа"
          name="price"
          id="price"
          type="number"
          required
        />
      </Indent>
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
};
export default Forma;
