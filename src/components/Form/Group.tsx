import React, { FC } from "react";
import { Form } from "react-bootstrap";

import { FormGroupFieldProps } from "./types";

export const Group: FC<FormGroupFieldProps> = ({
  label,
  helpText,
  error,
  children,
  ...props
}: FormGroupFieldProps) => (
  <Form.Group {...props}>
    {label && <Form.Label>{label}</Form.Label>}
    {children}
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    {helpText && <Form.Text muted>{helpText}</Form.Text>}
  </Form.Group>
);
