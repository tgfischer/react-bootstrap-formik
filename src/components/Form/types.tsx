import { FormEvent } from "react";
import { FormikProps, FieldAttributes } from "formik";

export type FormProps<Values> = FormikProps<Values> & {
  handleSubmit: (event: FormEvent<HTMLElement>) => void;
};

export type FormInputFieldProps<Values> = FieldAttributes<Values> & {
  label?: string;
  helpText?: string;
};
