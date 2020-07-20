import React, { FC } from "react";
import * as yup from "yup";
import { action } from "@storybook/addon-actions";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Textarea",
  component: Form.Textarea,
  subcomponents: { Form }
};

const initialValues = {
  foo: "Hello, World!"
};

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

export const Default: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Textarea name="foo" onChange={action("onChange")} />
  </SampleForm>
);

export const Label: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Textarea
      name="foo"
      label="Textarea field"
      onChange={action("onChange")}
    />
  </SampleForm>
);

export const Placeholder: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Textarea
      name="foo"
      label="Textarea field"
      placeholder="Please enter some text..."
      onChange={action("onChange")}
    />
  </SampleForm>
);

export const CustomType: FC = () => (
  <SampleForm initialValues={{ number: "" }} onSubmit={action("onSubmit")}>
    <Form.Textarea
      name="number"
      type="number"
      label="Numeric Textarea"
      onChange={action("onChange")}
    />
  </SampleForm>
);

export const InitialValues: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Textarea
      name="foo"
      label="Textarea field"
      onChange={action("onChange")}
    />
  </SampleForm>
);

export const HelpText: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Textarea
      name="foo"
      label="Textarea field"
      helpText={helpText}
      onChange={action("onChange")}
    />
  </SampleForm>
);

export const ErrorFeedback: FC = () => (
  <SampleForm
    initialValues={{ foo: "" }}
    initialErrors={{ foo: "This field is required" }}
    validationSchema={yup.object({ foo: yup.string().required() })}
    onSubmit={action("onSubmit")}
  >
    <Form.Textarea
      name="foo"
      label="Textarea field"
      onChange={action("onChange")}
      required
    />
  </SampleForm>
);

export const CustomRows: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Textarea
      name="foo"
      label="Textarea field"
      rows={10}
      onChange={action("onChange")}
    />
  </SampleForm>
);
