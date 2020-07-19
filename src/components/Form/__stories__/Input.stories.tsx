import React, { FC } from "react";
import { action } from "@storybook/addon-actions";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Input",
  component: Form.Input,
  subcomponents: { Form }
};

const initialValues = {
  foo: "bar"
};

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

export const NoInitialValue: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Input name="foo" label="Input field" />
  </SampleForm>
);

export const InitialValues: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Input name="foo" label="Input field" />
  </SampleForm>
);

export const NoLabel: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Input name="foo" />
  </SampleForm>
);

export const HelpText: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Input name="foo" label="Input field" helpText={helpText} />
  </SampleForm>
);
