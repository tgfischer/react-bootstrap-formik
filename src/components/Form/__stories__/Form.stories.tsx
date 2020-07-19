import React, { FC, ReactElement } from "react";
import { StoryFn } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import { Row, Col } from "react-bootstrap";

import { SampleForm } from "../__tests__/SampleForm";
import { Form } from "../../Form";

export default {
  title: "Form",
  component: Form,
  decorators: [
    (storyFn: StoryFn<ReactElement>): ReactElement => (
      <Row className="mt-5 ml-5 mr-5">
        <Col lg={6} md={8} sm={10} xs={12}>
          {storyFn()}
        </Col>
      </Row>
    )
  ]
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
