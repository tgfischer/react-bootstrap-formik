import classnames from "classnames";
import { useField, useFormikContext, FormikProps } from "formik";
import React, { FC, useContext, useCallback } from "react";
import { Form } from "react-bootstrap";

import { noop } from "../utils";

import { GroupContext } from "./Group";
import { FormCheckboxFieldProps } from "./types";

export const Radio: FC<FormCheckboxFieldProps> = ({
  custom,
  ...props
}: FormCheckboxFieldProps) => {
  const {
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched
  } = useFormikContext<FormikProps<FormCheckboxFieldProps>>();
  const { name: groupName = "" } = useContext(GroupContext);
  const [{ name, onBlur }] = useField(props);
  const isInvalid = Boolean(errors[groupName]) && touched[groupName];
  const handleChange = useCallback(
    (e) => {
      props.onChange!(e);
      setFieldTouched(groupName, true);
      setFieldValue(groupName, name);
    },
    [groupName, name, props.onChange, setFieldTouched, setFieldValue]
  );
  return (
    <Form.Check
      {...props}
      id={name}
      name={groupName}
      type="radio"
      className={classnames({ "is-invalid": isInvalid })}
      custom={custom}
    >
      <Form.Check.Input
        {...props}
        type="radio"
        checked={values[groupName] === name}
        isInvalid={isInvalid}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <Form.Check.Label title={props.title}>{props.label}</Form.Check.Label>
    </Form.Check>
  );
};

Radio.defaultProps = {
  onChange: noop
};
