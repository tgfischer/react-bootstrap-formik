import { FormEvent } from "react";
import { FormControlProps } from "react-bootstrap";
import { FormikProps, GenericFieldHTMLAttributes } from "formik";

export type FormProps<Values> = FormikProps<Values> & {
  handleSubmit: (event: FormEvent<HTMLElement>) => void;
};

export type FormInputFieldProps = FormControlProps &
  GenericFieldHTMLAttributes & {
    name: string;
    label?: string;
    helpText?: string;
  };
