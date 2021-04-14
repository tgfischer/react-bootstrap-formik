import { useField } from "formik";
import React, { FC } from "react";
import { Form } from "react-bootstrap";

import { noop } from "../utils";

import { Group } from "./Group";
import { useChange } from "./hooks";
import { FormSelectFieldProps } from "./types";

export const Select: FC<FormSelectFieldProps> = ({
  label,
  helpText,
  placeholder,
  children,
  ...props
}: FormSelectFieldProps) => {
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
        as="select"
        name={name}
        value={value?.toString()}
        isInvalid={Boolean(error) && touched}
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
  onChange: noop
};
