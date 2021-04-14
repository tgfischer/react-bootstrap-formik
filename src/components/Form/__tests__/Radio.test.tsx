import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import React from "react";
import * as yup from "yup";

import { Form } from "../../../index";

import { SampleForm } from "./SampleForm";

describe("Radio tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  it.each([
    [
      "should click the radio button once",
      () => {
        fireEvent.click(screen.getByLabelText("Radio 1"));
      },
      "radio1"
    ],
    [
      "should click the radio button two times",
      () => {
        fireEvent.click(screen.getByLabelText("Radio 1"));
        fireEvent.click(screen.getByLabelText("Radio 1"));
      },
      "radio1"
    ],
    [
      "should click multiple radio buttons",
      () => {
        fireEvent.click(screen.getByLabelText("Radio 1"));
        fireEvent.click(screen.getByLabelText("Radio 2"));
      },
      "radio2"
    ]
  ])("%s", async (_, action, expectedValue) => {
    render(
      <SampleForm initialValues={{ radio: "" }} onSubmit={handleSubmit}>
        <Form.Group name="radio">
          <Form.Radio name="radio1" label="Radio 1" />
          <Form.Radio name="radio2" label="Radio 2" />
        </Form.Group>
      </SampleForm>
    );

    action();
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { radio: expectedValue },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container } = render(
      <SampleForm
        initialValues={{ radio: "" }}
        validationSchema={yup.object({
          radio: yup.string().required()
        })}
        onSubmit={handleSubmit}
      >
        <Form.Group name="radio">
          <Form.Radio name="radio1" label="Radio 1" />
          <Form.Radio name="radio2" label="Radio 2" />
        </Form.Group>
      </SampleForm>
    );

    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "radio is a required field"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should not show the error feedback if the radio has not been touched", async () => {
    const { container } = render(
      <SampleForm
        initialValues={{ text: "", radio: "" }}
        validationSchema={yup.object({
          text: yup.string().required(),
          radio: yup.string().required()
        })}
        onSubmit={handleSubmit}
      >
        <Form.Group name="radio">
          <Form.Radio name="radio1" label="Radio 1" />
          <Form.Radio name="radio2" label="Radio 2" />
        </Form.Group>
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
        "radio is a required field"
      )
    );
  });

  it("should call on change event", async () => {
    render(
      <SampleForm initialValues={{ radio: "" }} onSubmit={handleSubmit}>
        <Form.Group name="radio">
          <Form.Radio name="radio1" label="Radio 1" onChange={handleChange} />
          <Form.Radio name="radio2" label="Radio 2" onChange={handleChange} />
        </Form.Group>
      </SampleForm>
    );

    fireEvent.click(screen.getByLabelText("Radio 1"));

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
