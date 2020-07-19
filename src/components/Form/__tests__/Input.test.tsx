import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Form } from "../../../index";
import { SampleForm } from "./SampleForm";

describe("Form", () => {
  const message = "Hello, World!";

  it("should render the component", async () => {
    const handleSubmit = jest.fn();

    const { getByLabelText, getByText } = render(
      <SampleForm initialValues={{ foo: "" }} onSubmit={handleSubmit}>
        <Form.Input name="foo" label="Input field" />
      </SampleForm>
    );
    fireEvent.change(getByLabelText("Input field"), {
      target: { value: message }
    });
    fireEvent.click(getByText("Submit"));
    expect(getByLabelText("Input field")).toMatchInlineSnapshot(`
      <input
        class="form-control"
        id="foo"
        name="foo"
        value="Hello, World!"
      />
    `);

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { foo: message },
        expect.any(Object)
      )
    );
  });
});
