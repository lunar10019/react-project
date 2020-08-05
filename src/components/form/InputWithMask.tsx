import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-input-mask';
import styled from 'styled-components';

export const TextError = styled.div`
  color: red;
  margin-bottom: -18px;
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
  textmask: string;
  label: string;
  variant: any;
}

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

//Компонент
const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask="+7 (999) 999 99 99"
    />
  );
};

const MyMaskField: React.FC<Values> = ({ id, name, variant, type, label }) => {
  const [field, meta] = useField(name);
  return (
    <div className="form2">
      <TextField
        label={label}
        value={field.value}
        onChange={field.onChange}
        autoComplete="off"
        id={id}
        name={name}
        type={type}
        variant={variant}
        InputProps={{
          inputComponent: TextMaskCustom as any,
        }}
        error={!!meta.touched && !!meta.error}
      />
      {meta.touched && meta.error ? <TextError>{meta.error}</TextError> : null}
    </div>
  );
};

export default MyMaskField;
