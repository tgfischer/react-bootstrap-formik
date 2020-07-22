import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { Group } from "./Group";
import { FormTextareaFieldProps } from "./types";
import { useChange } from "./hooks";

export const Textarea: FC<FormTextareaFieldProps> = ({
  label,
  helpText,
  ...props
}: FormTextareaFieldProps) => {
  const [{ name, value, onBlur }, { error }] = useField(props);
  const handleChange = useChange(props);
  return (
    <Group controlId={name} label={label} helpText={helpText} error={error}>
      <Form.Control
        {...props}
        as="textarea"
        name={name}
        value={value?.toString()}
        isInvalid={!!error}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </Group>
  );
};

Textarea.defaultProps = {
  onChange: () => null
};
