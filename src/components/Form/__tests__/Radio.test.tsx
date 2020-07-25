import React from "react";
import * as yup from "yup";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Form } from "../../../index";
import { SampleForm } from "./SampleForm";

type ActionType = {
  getByLabelText: (text: string) => HTMLElement;
};

describe("Radio tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  it.each([
    [
      "should click the radio button once",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Radio 1"));
      },
      "radio1"
    ],
    [
      "should click the radio button two times",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Radio 1"));
        fireEvent.click(getByLabelText("Radio 1"));
      },
      "radio1"
    ],
    [
      "should click multiple radio buttons",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Radio 1"));
        fireEvent.click(getByLabelText("Radio 2"));
      },
      "radio2"
    ]
  ])("%s", async (_, action, expectedValue) => {
    const { getByText, ...instance } = render(
      <SampleForm initialValues={{ radio: "" }} onSubmit={handleSubmit}>
        <Form.Group name="radio">
          <Form.Radio name="radio1" label="Radio 1" />
          <Form.Radio name="radio2" label="Radio 2" />
        </Form.Group>
      </SampleForm>
    );

    action(instance);
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { radio: expectedValue },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container, getByText } = render(
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

    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "radio is a required field"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should call on change event", async () => {
    const { getByLabelText } = render(
      <SampleForm initialValues={{ radio: "" }} onSubmit={handleSubmit}>
        <Form.Group name="radio">
          <Form.Radio name="radio1" label="Radio 1" onChange={handleChange} />
          <Form.Radio name="radio2" label="Radio 2" onChange={handleChange} />
        </Form.Group>
      </SampleForm>
    );

    fireEvent.click(getByLabelText("Radio 1"));

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
