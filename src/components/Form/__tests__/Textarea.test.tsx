import React from "react";
import * as yup from "yup";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Form } from "../../../index";
import { SampleForm } from "./SampleForm";

describe("Textarea tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const message = "Hello, World!";

  it("should render the component", async () => {
    const { getByLabelText, getByText } = render(
      <SampleForm initialValues={{ textarea: "" }} onSubmit={handleSubmit}>
        <Form.Textarea name="textarea" label="Textarea field" />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Textarea field"), {
      target: { value: message }
    });
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { textarea: message },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container, getByLabelText, getByText } = render(
      <SampleForm
        initialValues={{ textarea: "" }}
        validationSchema={yup
          .object({
            textarea: yup.string().max(1).required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Textarea name="textarea" label="Textarea field" />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Textarea field"), {
      target: { value: "batman" }
    });
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "textarea must be at most 1 characters"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should call on change event", async () => {
    const { getByLabelText } = render(
      <SampleForm initialValues={{ textarea: "" }} onSubmit={handleSubmit}>
        <Form.Textarea
          name="textarea"
          label="Textarea field"
          onChange={handleChange}
        />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Textarea field"), {
      target: { value: "batman" }
    });

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
