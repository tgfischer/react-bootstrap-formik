import React, { ReactElement } from "react";
import { addDecorator } from "@storybook/react";
import { StoryFn } from "@storybook/addons";
import { Row, Col } from "react-bootstrap";

import "bootstrap/scss/bootstrap.scss";

addDecorator((storyFn: StoryFn<ReactElement>): ReactElement => (
  <Row className="mt-5 ml-5 mr-5">
    <Col lg={6} md={8} sm={10} xs={12}>
      {storyFn()}
    </Col>
  </Row>
));
