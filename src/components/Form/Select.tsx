import React, { FC, useCallback } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { Group } from "./Group";
import { FormSelectFieldProps } from "./types";

export const Select: FC<FormSelectFieldProps> = ({
  label,
  helpText,
  placeholder,
  children,
  ...props
}: FormSelectFieldProps) => {
  const [{ name, value, onChange, onBlur }, { error }] = useField(props);
  const handleChange = useCallback((e) => (props.onChange!(e), onChange(e)), [
    onChange,
    props.onChange
  ]);
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
