import React, { FC } from "react";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik, FormikConfig, FormikValues } from "formik";

import { FormProps } from "./types";
import { Input } from "./Input";

export * from "./Input";

type FormComponent = FC<FormikConfig<FormikValues>> & {
  Input: typeof Input;
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
