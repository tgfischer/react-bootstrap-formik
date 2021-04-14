import { useField } from "formik";
import React, { FC } from "react";
import { Form } from "react-bootstrap";

import { noop } from "../utils";

import { Group } from "./Group";
import { useChange } from "./hooks";
import { FormTextareaFieldProps } from "./types";

export const Textarea: FC<FormTextareaFieldProps> = ({
  label,
  helpText,
  ...props
}: FormTextareaFieldProps) => {
  const [{ name, value, onBlur }, { error, touched }] = useField(props);
  const handleChange = useChange(props);
  return (
    <Group
      name={name}
      controlId={name}
      label={label}
      helpText={helpText}
      error={error}
    >
      <Form.Control
        {...props}
        as="textarea"
        name={name}
        value={value?.toString()}
        isInvalid={Boolean(error) && touched}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </Group>
  );
};

Textarea.defaultProps = {
  onChange: noop
};
