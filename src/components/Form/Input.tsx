import React, { FC, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useField, FormikValues } from "formik";

import { FormInputFieldProps } from "./types";

export const Input: FC<FormInputFieldProps<FormikValues>> = ({
  label,
  helpText,
  ...props
}: FormInputFieldProps<FormikValues>) => {
  const [{ name, value, onChange, onBlur }, { error }] = useField(props);
  const handleChange = useCallback((e) => (props.onChange!(e), onChange(e)), [
    onChange,
    props.onChange
  ]);
  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        name={name}
        value={value?.toString()}
        isInvalid={!!error}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
    </Form.Group>
  );
};

Input.defaultProps = {
  onChange: () => null
};
