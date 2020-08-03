import React, { FC } from "react";

import { Input } from "./Input";
import { FormRangeFieldProps } from "./types";

export const Range: FC<FormRangeFieldProps> = (props: FormRangeFieldProps) => (
  <Input {...props} type="range" />
);
