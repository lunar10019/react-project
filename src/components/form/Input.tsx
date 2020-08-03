import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';

interface Values {
  name: string;
  type?: string;
  required?: boolean;
  id: string;
  label: string;
  variant: any;
}

const MyTextField: React.FC<Values> = ({ id, name, type, variant, label }) => {
  const [field, meta] = useField({ id, name, type });

  return (
    <div className="form">
      <TextField
        variant={variant}
        autoComplete="off"
        label={label}
        id={id}
        name={name}
        type={type}
        value={field.value}
        onChange={field.onChange}
        error={!!meta.touched && !!meta.error}
      />
      {meta.touched && meta.error ? <div className="textErrror">{meta.error}</div> : null}
    </div>
  );
};

export default MyTextField;
