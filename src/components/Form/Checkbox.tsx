import React, { FC, useContext, useCallback, useMemo } from "react";
import { useField, useFormikContext, FormikProps } from "formik";
import { Form } from "react-bootstrap";
import classnames from "classnames";

import { GroupContext } from "./Group";
import { FormCheckboxFieldProps } from "./types";

export const Checkbox: FC<FormCheckboxFieldProps> = ({
  custom,
  ...props
}: FormCheckboxFieldProps) => {
  const { values, errors, setFieldValue } = useFormikContext<
    FormikProps<FormCheckboxFieldProps>
  >();
  const { name: groupName = "" } = useContext(GroupContext);
  const [{ name, onBlur }] = useField(props);
  const isChecked = useMemo(() => values[groupName].includes(name), [
    groupName,
    name,
    values
  ]);
  const isInvalid = !!errors[groupName];
  const handleChange = useCallback(
    (e) => {
      props.onChange!(e);
      setFieldValue(
        groupName,
        isChecked
          ? values[groupName].filter((value: string) => value !== name)
          : [...values[groupName], name]
      );
    },
    [groupName, isChecked, name, props.onChange, setFieldValue, values]
  );
  return (
    <Form.Check
      {...props}
      id={name}
      type="checkbox"
      className={classnames({ "is-invalid": isInvalid })}
      custom={custom}
    >
      <Form.Check.Input
        {...props}
        type="checkbox"
        checked={isChecked}
        isInvalid={isInvalid}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <Form.Check.Label title={props.title}>{props.label}</Form.Check.Label>
    </Form.Check>
  );
};

Checkbox.defaultProps = {
  onChange: () => null
};
