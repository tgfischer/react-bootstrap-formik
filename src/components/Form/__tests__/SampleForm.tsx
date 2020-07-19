import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { FormikConfig, FormikValues } from "formik";

import { Form } from "../../Form";

export const SampleForm: FC<FormikConfig<FormikValues>> = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => (
  <Form {...props}>
    {children}
    <div className="d-flex justify-content-end">
      <Button type="submit">Submit</Button>
    </div>
  </Form>
);
