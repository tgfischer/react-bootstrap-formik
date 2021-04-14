import { FormikValues } from "formik";
import React, { FC } from "react";
import { Button } from "react-bootstrap";

import { Form } from "../../../index";
import { FormProps } from "../types";

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
