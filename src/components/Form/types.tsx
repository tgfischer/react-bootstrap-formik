import { FormEvent, RefObject } from "react";
import { FormControlProps, FormGroupProps } from "react-bootstrap";
import { FormikProps, FormikConfig } from "formik";

export type FormProps<Values> = FormikConfig<Values> & {
  className?: string;
};

export type DerivedFormikProps<Values> = FormikProps<Values> & {
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

export type FormTextareaFieldProps = Omit<FormControlProps, "type"> &
  Omit<JSX.IntrinsicElements["textarea"], "ref"> &
  FormFieldProps & {
    ref?:
      | RefObject<HTMLTextAreaElement>
      | ((instance: HTMLTextAreaElement | null) => void)
      | null
      | undefined;
  };

export type FormSelectFieldProps = Omit<FormControlProps, "select"> &
  Omit<JSX.IntrinsicElements["select"], "ref"> &
  FormFieldProps & {
    ref?:
      | RefObject<HTMLSelectElement>
      | ((instance: HTMLSelectElement | null) => void)
      | null
      | undefined;
  };

export type FormRangeFieldProps = Omit<FormInputFieldProps, "type">;

export type FormCheckboxFieldProps = Omit<FormControlProps, "type"> &
  JSX.IntrinsicElements["input"] & {
    name: string;
    label: string;
  };
