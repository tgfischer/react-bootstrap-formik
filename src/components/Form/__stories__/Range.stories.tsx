import React, { FC } from "react";
import * as yup from "yup";
import { action } from "@storybook/addon-actions";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Range",
  component: Form.Range,
  subcomponents: { Form }
};

const initialValues = {
  foo: ""
};

const errorMessage = "The range value must be between 50 and 100";

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

export const Default: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Range name="foo" onChange={action("onChange")} />
  </SampleForm>
);

export const Label: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Range name="foo" label="Range field" onChange={action("onChange")} />
  </SampleForm>
);

export const InitialValue: FC = () => (
  <SampleForm initialValues={{ foo: 75 }} onSubmit={action("onSubmit")}>
    <Form.Range name="foo" label="Range field" onChange={action("onChange")} />
  </SampleForm>
);

export const HelpText: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Range
      name="foo"
      label="Range field"
      helpText={helpText}
      onChange={action("onChange")}
    />
  </SampleForm>
);

export const Custom: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Range
      name="foo"
      label="Range field"
      onChange={action("onChange")}
      custom
    />
  </SampleForm>
);

export const ErrorFeedback: FC = () => (
  <SampleForm
    initialValues={{ foo: 0 }}
    initialErrors={{ foo: errorMessage }}
    initialTouched={{ foo: true }}
    validationSchema={yup
      .object({
        foo: yup
          .number()
          .integer()
          .positive()
          .min(50, errorMessage)
          .max(100, errorMessage)
          .required(errorMessage)
      })
      .required()}
    onSubmit={action("onSubmit")}
  >
    <Form.Range
      name="foo"
      label="Range field"
      helpText={helpText}
      onChange={action("onChange")}
    />
  </SampleForm>
);
