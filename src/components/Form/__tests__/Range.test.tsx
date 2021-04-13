import React from "react";
import * as yup from "yup";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Form } from "../../../index";
import { SampleForm } from "./SampleForm";

describe("Range tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const expectedValue = 75;

  it("should change the range value", async () => {
    const { getByLabelText, getByText } = render(
      <SampleForm initialValues={{ range: "" }} onSubmit={handleSubmit}>
        <Form.Range name="range" label="Range field" />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Range field"), {
      target: { value: expectedValue }
    });
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { range: expectedValue },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container, getByText } = render(
      <SampleForm
        initialValues={{ range: "" }}
        validationSchema={yup
          .object({
            range: yup.number().integer().positive().required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Range name="range" label="Range field" />
      </SampleForm>
    );

    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "range is a required field"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should not show the error feedback if the range has not been touched", async () => {
    const { container, getByText, getByLabelText } = render(
      <SampleForm
        initialValues={{ range: "", text: "" }}
        validationSchema={yup
          .object({
            text: yup.string().required(),
            range: yup.number().integer().positive().required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Range name="range" label="Range field" />
        <Form.Input name="text" label="Text" />
      </SampleForm>
    );

    // Ensure that the error feedback is empty
    fireEvent.change(getByLabelText("Text"), { target: { value: "foo" } });
    expect(container.firstChild).toMatchSnapshot();

    // Ensure that the error feedback is set
    fireEvent.click(getByText("Submit"));
    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "range is a required field"
      )
    );
  });

  it("should call on change event", async () => {
    const { getByLabelText } = render(
      <SampleForm initialValues={{ range: "" }} onSubmit={handleSubmit}>
        <Form.Range name="range" label="Range field" onChange={handleChange} />
      </SampleForm>
    );

    fireEvent.change(getByLabelText("Range field"), {
      target: { value: expectedValue }
    });

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
