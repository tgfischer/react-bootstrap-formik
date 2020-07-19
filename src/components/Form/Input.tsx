import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { useField, FieldAttributes, FormikValues } from "formik";

export type FormInputFieldProps<Values> = FieldAttributes<Values> & {
  label?: string;
  helpText?: string;
};

export const Input: FC<FormInputFieldProps<FormikValues>> = ({
  label,
  helpText,
  ...props
}: FormInputFieldProps<FormikValues>) => {
  const [{ name, value, onChange, onBlur }] = useField(props);
  return (
    <Form.Group controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        name={name}
        value={value?.toString()}
        onChange={onChange}
        onBlur={onBlur}
      />
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
    </Form.Group>
  );
};
