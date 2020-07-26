import React, { FC } from "react";

import { Input } from "./Input";
import { FormInputFieldProps } from "./types";

export const Range: FC<FormInputFieldProps> = (props: FormInputFieldProps) => (
  <Input {...props} type="range" />
);
