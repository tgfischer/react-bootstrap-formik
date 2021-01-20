import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

import { noop } from "../utils";
import { Group } from "./Group";
import { FormInputFieldProps } from "./types";
import { useChange } from "./hooks";

export const Input: FC<FormInputFieldProps> = ({
  label,
  helpText,
  groupClassName,
  ...props
}: FormInputFieldProps) => {
  const [{ name, value, onBlur }, { error }] = useField(props);
  const handleChange = useChange(props);
  return (
    <Group
      name={name}
      controlId={name}
      label={label}
      helpText={helpText}
      error={error}
      className={groupClassName}
    >
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
  onChange: noop
};
