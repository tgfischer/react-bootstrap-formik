import React, { FC } from "react";
import { action } from "@storybook/addon-actions";
import * as yup from "yup";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../../index";

export default {
  title: "Checkbox",
  component: Form.Checkbox,
  subcomponents: { Form, Group: Form.Group }
};

const initialValues = { foo: [] };

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

const Checkboxes: FC = () => (
  <>
    <Form.Checkbox
      name="checkbox1"
      label="Checkbox 1"
      onChange={action("onChange")}
      custom
    />
    <Form.Checkbox
      name="checkbox2"
      label="Checkbox 2"
      onChange={action("onChange")}
      custom
    />
  </>
);

export const Default: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.CheckboxGroup name="foo">
      <Checkboxes />
    </Form.CheckboxGroup>
  </SampleForm>
);

export const Label: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.CheckboxGroup name="foo" label="Select from the options below">
      <Checkboxes />
    </Form.CheckboxGroup>
  </SampleForm>
);

export const CustomType: FC = () => (
  <SampleForm
    initialValues={{ foo: ["checkbox2"] }}
    onSubmit={action("onSubmit")}
  >
    <Form.CheckboxGroup name="foo" label="Select from the options below">
      <Checkboxes />
    </Form.CheckboxGroup>
  </SampleForm>
);

export const InitialValues: FC = () => (
  <SampleForm
    initialValues={{ foo: ["checkbox2"] }}
    onSubmit={action("onSubmit")}
  >
    <Form.CheckboxGroup name="foo" label="Select from the options below">
      <Checkboxes />
    </Form.CheckboxGroup>
  </SampleForm>
);

export const HelpText: FC = () => (
  <SampleForm initialValues={initialValues} onSubmit={action("onSubmit")}>
    <Form.CheckboxGroup
      name="foo"
      label="Select from the options below"
      helpText={helpText}
    >
      <Checkboxes />
    </Form.CheckboxGroup>
  </SampleForm>
);

export const ErrorFeedback: FC = () => (
  <SampleForm
    initialValues={initialValues}
    initialErrors={{ foo: "You must select at least one option" }}
    validationSchema={yup.object({
      foo: yup.array().of(yup.string().required()).required()
    })}
    onSubmit={action("onSubmit")}
  >
    <Form.CheckboxGroup name="foo" label="Select from the options below">
      <Checkboxes />
    </Form.CheckboxGroup>
  </SampleForm>
);
