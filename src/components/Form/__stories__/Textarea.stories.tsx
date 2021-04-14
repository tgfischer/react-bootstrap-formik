import React from "react";
import * as yup from "yup";
import { action } from "@storybook/addon-actions";
import { FormikConfig, FormikValues } from "formik";
import { Story, Meta } from "@storybook/react";

import { SampleForm } from "../__tests__/SampleForm";
import { Form, FormTextareaFieldProps } from "../../../index";

const meta: Meta = {
  title: "Textarea",
  component: Form.Textarea,
  subcomponents: { Form }
};

export default meta;

const label = "Textarea field";

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

type StoryOptions = Partial<FormikConfig<FormikValues>> &
  Partial<FormTextareaFieldProps>;

const Template: Story<StoryOptions> = ({
  name = "foo",
  label,
  helpText,
  placeholder,
  required,
  rows,
  initialValues = { [name]: "" },
  initialErrors,
  initialTouched,
  validationSchema
}) => (
  <SampleForm
    initialValues={initialValues}
    initialErrors={initialErrors}
    initialTouched={initialTouched}
    validationSchema={validationSchema}
    onSubmit={action("onSubmit")}
  >
    <Form.Textarea
      name={name}
      label={label}
      helpText={helpText}
      placeholder={placeholder}
      rows={rows}
      onChange={action("onChange")}
      required={required}
    />
  </SampleForm>
);

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label
};

export const CustomRows = Template.bind({});
CustomRows.args = {
  label,
  rows: 10
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label,
  placeholder: "Please enter some text..."
};

export const InitialValues = Template.bind({});
InitialValues.args = {
  label,
  initialValues: { foo: "Hello, World!" }
};

export const HelpText = Template.bind({});
HelpText.args = {
  label,
  helpText
};

export const ErrorFeedback = Template.bind({});
ErrorFeedback.args = {
  label,
  required: true,
  initialErrors: { foo: "This field is required" },
  initialTouched: { foo: true },
  validationSchema: yup.object({ foo: yup.string().required() })
};
