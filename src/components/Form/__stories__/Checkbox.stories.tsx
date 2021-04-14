import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { FormikConfig, FormikValues } from "formik";
import React from "react";
import * as yup from "yup";

import {
  Form,
  FormCheckboxFieldProps,
  FormGroupFieldProps
} from "../../../index";
import { SampleForm } from "../__tests__/SampleForm";

const meta: Meta = {
  title: "Checkbox",
  component: Form.Checkbox,
  subcomponents: { Form, Group: Form.Group }
};

export default meta;

const label = "Select from the options below";

const helpText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et orci diam. Donec rutrum odio sit amet ante porta, sed tempus est varius.";

type StoryOptions = Partial<FormikConfig<FormikValues>> &
  Partial<FormGroupFieldProps> &
  Partial<FormCheckboxFieldProps>;

const Template: Story<StoryOptions> = ({
  name = "foo",
  label,
  helpText,
  initialValues = { [name]: [] },
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
    <Form.Group name={name} label={label} helpText={helpText}>
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
    </Form.Group>
  </SampleForm>
);

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label
};

export const InitialValues = Template.bind({});
InitialValues.args = {
  label,
  initialValues: { foo: ["checkbox2"] }
};

export const HelpText = Template.bind({});
HelpText.args = {
  label,
  helpText
};

export const ErrorFeedback = Template.bind({});
ErrorFeedback.args = {
  label,
  initialErrors: { foo: "You must select at least one option" },
  initialTouched: { foo: true },
  validationSchema: yup.object({
    foo: yup.array().of(yup.string().required()).min(1).required()
  })
};
