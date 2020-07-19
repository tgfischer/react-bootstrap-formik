import React, { FC, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { FormInputFieldProps } from "./types";

export const Input: FC<FormInputFieldProps> = ({
  label,
  helpText,
  ...props
}: FormInputFieldProps) => {
  const [{ name, value, onChange, onBlur }, { error }] = useField(props);
  const handleChange = useCallback((e) => (props.onChange!(e), onChange(e)), [
    onChange,
    props.onChange
  ]);
  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        {...props}
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
