import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { Group } from "./Group";
import { FormInputFieldProps } from "./types";
import { useChange } from "./hooks";

export const Input: FC<FormInputFieldProps> = ({
  label,
  helpText,
  ...props
}: FormInputFieldProps) => {
  const [{ name, value, onBlur }, { error }] = useField(props);
  const handleChange = useChange(props);
  return (
    <Group controlId={name} label={label} helpText={helpText} error={error}>
      <Form.Control
        {...props}
        name={name}
        value={value?.toString()}
        isInvalid={!!error}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </Group>
  );
};

Input.defaultProps = {
  onChange: () => null
};
