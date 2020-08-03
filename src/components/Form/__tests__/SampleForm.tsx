import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { FormikValues } from "formik";

import { FormProps } from "../types";
import { Form } from "../../../index";

export const SampleForm: FC<FormProps<FormikValues>> = ({
  children,
  ...props
}: FormProps<FormikValues>) => (
  <Form {...props}>
    {children}
    <div className="d-flex justify-content-end">
      <Button type="submit">Submit</Button>
    </div>
  </Form>
);
