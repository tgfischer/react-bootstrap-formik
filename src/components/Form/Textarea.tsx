import React, { FC } from "react";

import { Input } from "./Input";
import { FormInputFieldProps } from "./types";

export const Textarea: FC<FormInputFieldProps> = (
  props: FormInputFieldProps
) => {
  return <Input {...props} as="textarea" />;
};
