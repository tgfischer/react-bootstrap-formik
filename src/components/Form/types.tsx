import { FormEvent, RefObject } from "react";
import { FormControlProps, FormGroupProps } from "react-bootstrap";
import { FormikProps } from "formik";

export type FormProps<Values> = FormikProps<Values> & {
  handleSubmit: (event: FormEvent<HTMLElement>) => void;
};

export type FormFieldProps = {
  name: string;
  label?: string;
  helpText?: string;
};

export type FormGroupFieldProps = FormGroupProps & {
  name: string;
  label?: string;
  helpText?: string;
  error?: string;
};

export type FormInputFieldProps = FormControlProps &
  JSX.IntrinsicElements["input"] &
  FormFieldProps;

export type FormTextareaFieldProps = FormControlProps &
  Omit<JSX.IntrinsicElements["textarea"], "ref"> &
  FormFieldProps & {
    ref?:
      | RefObject<HTMLTextAreaElement>
      | ((instance: HTMLTextAreaElement | null) => void)
      | null
      | undefined;
  };

export type FormSelectFieldProps = FormControlProps &
  Omit<JSX.IntrinsicElements["select"], "ref"> &
  FormFieldProps & {
    ref?:
      | RefObject<HTMLSelectElement>
      | ((instance: HTMLSelectElement | null) => void)
      | null
      | undefined;
  };

export type FormCheckboxFieldProps = FormControlProps &
  JSX.IntrinsicElements["input"] & {
    name: string;
    label: string;
  };

export type BaseFormCheckboxFieldProps = FormCheckboxFieldProps & {
  type: "radio" | "checkbox";
  isChecked: boolean;
};
