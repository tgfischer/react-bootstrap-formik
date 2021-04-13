import React, { FC } from "react";
import * as yup from "yup";
import { action } from "@storybook/addon-actions";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Select",
  component: Form.Select,
  subcomponents: { Form }
};

const initialValues = { foo: "value3" };

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

const Options: FC = () => (
  <>
    <option value="value1">Value 1</option>
    <option value="value2">Value 2</option>
    <option value="value3">Value 3</option>
    <option value="value4">Value 4</option>
    <option value="value5">Value 5</option>
  </>
);

export const Default: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Select name="foo" onChange={action("onChange")}>
      <Options />
    </Form.Select>
  </SampleForm>
);

export const Label: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Select name="foo" label="Select field" onChange={action("onChange")}>
      <Options />
    </Form.Select>
  </SampleForm>
);

export const Placeholder: FC = () => (
  <SampleForm initialValues={{ foo: "" }} onSubmit={action("onSubmit")}>
    <Form.Select
      name="foo"
      label="Select field"
      placeholder="Please select an option..."
      onChange={action("onChange")}
    >
      <Options />
    </Form.Select>
  </SampleForm>
);

export const InitialValue: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Select
      name="foo"
      label="Select field"
      placeholder="Please select an option..."
      onChange={action("onChange")}
    >
      <Options />
    </Form.Select>
  </SampleForm>
);

export const HelpText: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.Select
      name="foo"
      label="Select field"
      placeholder="Please select an option..."
      helpText={helpText}
      onChange={action("onChange")}
    >
      <Options />
    </Form.Select>
  </SampleForm>
);

export const ErrorFeedback: FC = () => (
  <SampleForm
    initialValues={{ foo: "" }}
    initialErrors={{ foo: "This field is required" }}
    initialTouched={{ foo: true }}
    validationSchema={yup.object({ foo: yup.string().required() })}
    onSubmit={action("onSubmit")}
  >
    <Form.Select
      name="foo"
      label="Select field"
      placeholder="Please select an option..."
      onChange={action("onChange")}
    >
      <Options />
    </Form.Select>
  </SampleForm>
);
