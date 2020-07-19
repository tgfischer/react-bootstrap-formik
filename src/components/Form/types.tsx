import { FormEvent } from "react";
import { FormikProps } from "formik";

export type FormProps<Values> = FormikProps<Values> & {
  handleSubmit: (event: FormEvent<HTMLElement>) => void;
};
