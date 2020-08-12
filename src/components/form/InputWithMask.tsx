import React, { Fragment } from 'react';
import { useField, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-input-mask';
import styled from 'styled-components';
import { InputBaseComponentProps } from '@material-ui/core';

export const TextError = styled.div`
  color: red;
  margin-bottom: -8px;
  margin-right: -50px;

  @media (min-width: 320px) {
    font-size: 14px;
  }
`;

interface Values {
  name: string;
  type?: string;
  required?: boolean;
  id: string;
  label: string;
  variant: any;
}

//Компонент

const MyMaskField: React.FC<Values> = ({ id, name, variant, type, label }) => {
  const [field, meta] = useField(name);

  return (
    <Fragment>
      <MaskedInput
        mask="+7 (999) 999 99 99"
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}>
        {(inputProps) => (
          <TextField
            {...inputProps}
            id={id}
            type={type}
            label={label}
            error={!!meta.touched && !!meta.error}
            variant={variant}
            name={name}
          />
        )}
      </MaskedInput>
      <TextError>
        <ErrorMessage name={name} />
      </TextError>
    </Fragment>
  );
};

export default MyMaskField;
