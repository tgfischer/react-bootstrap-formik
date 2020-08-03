import React, { FC } from "react";
import { Form as BootstrapForm } from "react-bootstrap";
import { Formik, FormikValues } from "formik";

import { DerivedFormikProps, FormProps } from "./types";
import { Group } from "./Group";
import { Input } from "./Input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { Range } from "./Range";

export * from "./types";

type FormComponent = FC<FormProps<FormikValues>> & {
  Group: typeof Group;
  Input: typeof Input;
  Textarea: typeof Textarea;
  Select: typeof Select;
  Checkbox: typeof Checkbox;
  Radio: typeof Radio;
  Range: typeof Range;
};

export const Form: FormComponent = ({
  className,
  children,
  ...props
}: FormProps<FormikValues>) => (
  <Formik {...props}>
    {({ handleSubmit }: DerivedFormikProps<FormikValues>) => (
      <BootstrapForm className={className} onSubmit={handleSubmit}>
        {children}
      </BootstrapForm>
    )}
  </Formik>
);

Form.Group = Group;
Form.Input = Input;
Form.Textarea = Textarea;
Form.Select = Select;
Form.Checkbox = Checkbox;
Form.Radio = Radio;
Form.Range = Range;
