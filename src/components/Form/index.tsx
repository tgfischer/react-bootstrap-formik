import React, { FC } from "react";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik, FormikConfig, FormikValues } from "formik";

import { FormProps } from "./types";
import { Group } from "./Group";
import { Input } from "./Input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Checkbox, CheckboxGroup } from "./Checkbox";
import { Radio, RadioGroup } from "./Radio";

export { useFormikContext, useField } from "formik";

type FormComponent = FC<FormikConfig<FormikValues>> & {
  Group: typeof Group;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
  CheckboxGroup: typeof CheckboxGroup;
  Checkbox: typeof Checkbox;
  RadioGroup: typeof RadioGroup;
  Radio: typeof Radio;
};

export const Form: FormComponent = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => (
  <Formik {...props}>
    {({ handleSubmit }: FormProps<FormikValues>) => (
      <BootstrapForm onSubmit={handleSubmit}>{children}</BootstrapForm>
    )}
  </Formik>
);

Form.Group = Group;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Select = Select;
Form.CheckboxGroup = CheckboxGroup;
Form.Checkbox = Checkbox;
Form.RadioGroup = RadioGroup;
Form.Radio = Radio;
