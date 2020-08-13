import React, { Fragment } from 'react';
import { useField, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { TextError } from './InputWithMask';
import { useIntl } from 'react-intl';

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
  const intl = useIntl();

  return (
    <Fragment>
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
      <div style={{ height: '25px' }}>
        <TextError>
          <ErrorMessage name={name} render={(id) => <div>{intl.formatMessage({ id })}</div>} />
        </TextError>
      </div>
    </Fragment>
  );
};

export default MyTextField;
