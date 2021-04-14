import React from "react";
import { DecoratorFn } from "@storybook/react";
import { Row, Col } from "react-bootstrap";

import "bootstrap/scss/bootstrap.scss";

const ContainerDecorator: DecoratorFn = (Story, context) => (
  <Row className="mt-5 ml-5 mr-5">
    <Col lg={6} md={8} sm={10} xs={12}>
      <Story {...context} />
    </Col>
  </Row>
);

export const decorators = [ContainerDecorator];
