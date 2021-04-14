import { render } from "@testing-library/react";
import React from "react";

import { Form } from "../../../index";

import { SampleForm } from "./SampleForm";

describe("Form tests", () => {
  it("should apply the class name to the form", async () => {
    const { container } = render(
      <SampleForm
        className="p-1"
        initialValues={{ input: "" }}
        onSubmit={jest.fn()}
      >
        <Form.Input name="input" label="Input field" />
      </SampleForm>
    );
    expect(container.querySelector("form")).toHaveClass("p-1");
  });
});
