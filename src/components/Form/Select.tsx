import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { Group } from "./Group";
import { FormSelectFieldProps } from "./types";
import { useChange } from "./hooks";

export const Select: FC<FormSelectFieldProps> = ({
  label,
  helpText,
  placeholder,
  children,
  ...props
}: FormSelectFieldProps) => {
  const [{ name, value, onBlur }, { error }] = useField(props);
  const handleChange = useChange(props);
  return (
    <Group controlId={name} label={label} helpText={helpText} error={error}>
      <Form.Control
        {...props}
        as="select"
        name={name}
        value={value?.toString()}
        isInvalid={!!error}
        onChange={handleChange}
        onBlur={onBlur}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </Form.Control>
    </Group>
  );
};

Select.defaultProps = {
  onChange: () => null
};
