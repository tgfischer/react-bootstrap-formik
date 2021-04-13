import React from "react";
import * as yup from "yup";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Form } from "../../../index";
import { SampleForm } from "./SampleForm";

describe("Input tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const message = "Hello, World!";

  it("should enter text in the input, and submit the form", async () => {
    const { getByLabelText, getByText } = render(
      <SampleForm initialValues={{ input: "" }} onSubmit={handleSubmit}>
        <Form.Input name="input" label="Input field" />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Input field"), {
      target: { value: message }
    });
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { input: message },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container, getByLabelText, getByText } = render(
      <SampleForm
        initialValues={{ input: "" }}
        validationSchema={yup
          .object({
            input: yup.string().max(1).required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Input name="input" label="Input field" />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Input field"), {
      target: { value: "batman" }
    });
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "input must be at most 1 characters"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should not show the error feedback if the input has not been touched", async () => {
    const { container, getByLabelText, getByText } = render(
      <SampleForm
        initialValues={{ input1: "", input2: "" }}
        validationSchema={yup
          .object({
            input1: yup.string().required(),
            input2: yup.string().required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Input name="input1" label="Input 1" />
        <Form.Input name="input2" label="Input 2" />
      </SampleForm>
    );

    // Ensure the error feedback is empty
    fireEvent.change(getByLabelText("Input 2"), {
      target: { value: "batman" }
    });
    expect(container.firstChild).toMatchSnapshot();

    // Ensure that the error feedback is set
    fireEvent.click(getByText("Submit"));
    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "input1 is a required field"
      )
    );
  });

  it("should call on change event", async () => {
    const { getByLabelText } = render(
      <SampleForm initialValues={{ input: "" }} onSubmit={handleSubmit}>
        <Form.Input name="input" label="Input field" onChange={handleChange} />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Input field"), {
      target: { value: "batman" }
    });

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
