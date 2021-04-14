import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import React, { FC } from "react";
import * as yup from "yup";

import { Form } from "../../../index";

import { SampleForm } from "./SampleForm";

describe("Select tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const value = "value3";

  const Options: FC = () => (
    <>
      <option value="value1">Value 1</option>
      <option value="value2">Value 2</option>
      <option value="value3">Value 3</option>
      <option value="value4">Value 4</option>
      <option value="value5">Value 5</option>
    </>
  );

  it("should change the select value", async () => {
    render(
      <SampleForm initialValues={{ select: "" }} onSubmit={handleSubmit}>
        <Form.Select name="select" label="Select field">
          <Options />
        </Form.Select>
      </SampleForm>
    );

    fireEvent.change(screen.getByLabelText("Select field"), {
      target: { value }
    });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { select: value },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container } = render(
      <SampleForm
        initialValues={{ select: "" }}
        validationSchema={yup
          .object({
            select: yup.string().required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Select
          name="select"
          label="Select field"
          placeholder="Please select a value..."
        >
          <Options />
        </Form.Select>
      </SampleForm>
    );

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "select is a required field"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should not show the error feedback if the select has not been touched", async () => {
    const { container } = render(
      <SampleForm
        initialValues={{ select: "", text: "" }}
        validationSchema={yup
          .object({
            select: yup.string().required(),
            text: yup.string().required()
          })
          .required()}
        onSubmit={handleSubmit}
      >
        <Form.Select
          name="select"
          label="Select field"
          placeholder="Please select a value..."
        >
          <Options />
        </Form.Select>
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
        "select is a required field"
      )
    );
  });

  it("should call on change event", async () => {
    render(
      <SampleForm initialValues={{ select: "" }} onSubmit={handleSubmit}>
        <Form.Select name="select" label="Select field" onChange={handleChange}>
          <Options />
        </Form.Select>
      </SampleForm>
    );

    fireEvent.change(screen.getByLabelText("Select field"), {
      target: { value }
    });

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
