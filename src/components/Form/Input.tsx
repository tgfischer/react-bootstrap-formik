import React, { FC, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { Group } from "./Group";
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
