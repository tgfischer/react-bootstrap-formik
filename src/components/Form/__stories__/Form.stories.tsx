import React, { FC } from "react";
import * as yup from "yup";
import { action } from "@storybook/addon-actions";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Samples",
  component: Form
};

export const Login: FC = () => (
  <SampleForm
    initialValues={{ email: "", password: "" }}
    validationSchema={yup
      .object({
        email: yup
          .string()
          .email("You must enter a valid email")
          .required("You must enter your email"),
        password: yup.string().required("You must enter your password")
      })
      .required()}
    onSubmit={action("onSubmit")}
  >
    <Form.Input
      name="email"
      type="email"
      label="Email"
      onChange={action("onChange")}
    />
    <Form.Input
      name="password"
      type="password"
      label="Password"
      onChange={action("onChange")}
    />
  </SampleForm>
);
