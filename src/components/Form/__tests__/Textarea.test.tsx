import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import React from "react";
import * as yup from "yup";

import { Form } from "../../../index";

import { SampleForm } from "./SampleForm";

describe("Textarea tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const message = "Hello, World!";

  it("should change the textarea value", async () => {
    render(
      <SampleForm initialValues={{ textarea: "" }} onSubmit={handleSubmit}>
        <Form.Textarea name="textarea" label="Textarea field" />
      </SampleForm>
    );

    fireEvent.change(screen.getByLabelText("Textarea field"), {
      target: { value: message }
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { textarea: message },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container } = render(
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

    fireEvent.change(screen.getByLabelText("Textarea field"), {
      target: { value: "batman" }
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "textarea must be at most 1 characters"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should not show the error feedback if the textarea has not been touched", async () => {
    const { container } = render(
      <SampleForm
        initialValues={{ textarea: "", text: "" }}
        validationSchema={yup
          .object({
            textarea: yup.string().required(),
            text: yup.string().required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Textarea name="textarea" label="Textarea field" />
        <Form.Input name="text" label="Text" />
      </SampleForm>
    );

    // Ensure that the error feedback is empty
    fireEvent.change(screen.getByLabelText("Text"), {
      target: { value: "foo" }
    });
    expect(container.firstChild).toMatchSnapshot();

    // Ensure that the error feedback is set
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "textarea is a required field"
      )
    );
  });

  it("should call on change event", async () => {
    render(
      <SampleForm initialValues={{ textarea: "" }} onSubmit={handleSubmit}>
        <Form.Textarea
          name="textarea"
          label="Textarea field"
          onChange={handleChange}
        />
      </SampleForm>
    );

    fireEvent.change(screen.getByLabelText("Textarea field"), {
      target: { value: "batman" }
    });

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
