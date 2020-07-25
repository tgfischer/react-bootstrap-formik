import React, { FC } from "react";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik, FormikConfig, FormikValues } from "formik";

import { FormProps } from "./types";
import { Group } from "./Group";
import { Input } from "./Input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";

export { useFormikContext, useField } from "formik";

type FormComponent = FC<FormikConfig<FormikValues>> & {
  Group: typeof Group;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
  Checkbox: typeof Checkbox;
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
Form.Checkbox = Checkbox;
Form.Radio = Radio;
