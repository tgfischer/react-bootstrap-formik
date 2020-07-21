import React, { FC } from "react";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik, FormikConfig, FormikValues } from "formik";

import { FormProps } from "./types";
import { Input } from "./Input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";

type FormComponent = FC<FormikConfig<FormikValues>> & {
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
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

Form.Input = Input;
Form.Textarea = Textarea;
Form.Select = Select;
