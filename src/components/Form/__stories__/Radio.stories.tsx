import React, { FC } from "react";
import { action } from "@storybook/addon-actions";
import * as yup from "yup";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Radio",
  component: Form.Radio,
  subcomponents: { Form, Group: Form.Group }
};

const initialValues = { foo: "" };

const label = "Select from the options below";

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

const RadioButtons: FC = () => (
  <>
    <Form.Radio
      name="radio1"
      label="Radio 1"
      onChange={action("onChange")}
      custom
    />
    <Form.Radio
      name="radio2"
      label="Radio 2"
      onChange={action("onChange")}
      custom
    />
  </>
);

export const Default: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Group name="foo">
      <RadioButtons />
    </Form.Group>
  </SampleForm>
);

export const Label: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Group name="foo" label={label}>
      <RadioButtons />
    </Form.Group>
  </SampleForm>
);

export const InitialValues: FC = () => (
  <SampleForm initialValues={{ foo: "radio2" }} onSubmit={action("onSubmit")}>
    <Form.Group name="foo" label={label}>
      <RadioButtons />
    </Form.Group>
  </SampleForm>
);

export const HelpText: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Group name="foo" label={label} helpText={helpText}>
      <RadioButtons />
    </Form.Group>
  </SampleForm>
);

export const ErrorFeedback: FC = () => (
  <SampleForm
    initialValues={initialValues}
    initialErrors={{ foo: "You must select at least one option" }}
    validationSchema={yup.object({
      foo: yup.string().required()
    })}
    onSubmit={action("onSubmit")}
  >
    <Form.Group name="foo" label={label}>
      <RadioButtons />
    </Form.Group>
  </SampleForm>
);
