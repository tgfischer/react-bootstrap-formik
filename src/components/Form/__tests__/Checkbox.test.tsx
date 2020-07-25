import React from "react";
import * as yup from "yup";
import { render, fireEvent, waitFor } from "@testing-library/react";

import { Form } from "../../../index";
import { SampleForm } from "./SampleForm";

type ActionType = {
  getByLabelText: (text: string) => HTMLElement;
};

describe("Checkbox tests", () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  it.each([
    [
      "should toggle the checkbox once",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Checkbox 1"));
      },
      ["checkbox1"]
    ],
    [
      "should toggle the checkbox two times",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Checkbox 1"));
        fireEvent.click(getByLabelText("Checkbox 1"));
      },
      []
    ],
    [
      "should toggle the checkbox three times",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Checkbox 1"));
        fireEvent.click(getByLabelText("Checkbox 1"));
        fireEvent.click(getByLabelText("Checkbox 1"));
      },
      ["checkbox1"]
    ],
    [
      "should toggle multiple checkboxes",
      ({ getByLabelText }: ActionType) => {
        fireEvent.click(getByLabelText("Checkbox 1"));
        fireEvent.click(getByLabelText("Checkbox 2"));
      },
      ["checkbox1", "checkbox2"]
    ]
  ])("%s", async (_, action, expectedValue) => {
    const { getByText, ...instance } = render(
      <SampleForm initialValues={{ checkbox: [] }} onSubmit={handleSubmit}>
        <Form.Group name="checkbox">
          <Form.Checkbox name="checkbox1" label="Checkbox 1" />
          <Form.Checkbox name="checkbox2" label="Checkbox 2" />
        </Form.Group>
      </SampleForm>
    );

    action(instance);
    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        { checkbox: expectedValue },
        expect.any(Object)
      )
    );
  });

  it("should show the error feedback message", async () => {
    const { container, getByText } = render(
      <SampleForm
        initialValues={{ checkbox: [] }}
        validationSchema={yup.object({
          checkbox: yup.array().of(yup.string().required()).required()
        })}
        onSubmit={handleSubmit}
      >
        <Form.Group name="checkbox">
          <Form.Checkbox name="checkbox1" label="Checkbox 1" />
          <Form.Checkbox name="checkbox2" label="Checkbox 2" />
        </Form.Group>
      </SampleForm>
    );

    fireEvent.click(getByText("Submit"));

    await waitFor(() =>
      expect(container.querySelector(".invalid-feedback")).toHaveTextContent(
        "checkbox is a required field"
      )
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should call on change event", async () => {
    const { getByLabelText } = render(
      <SampleForm initialValues={{ checkbox: [] }} onSubmit={handleSubmit}>
        <Form.Group name="checkbox">
          <Form.Checkbox
            name="checkbox1"
            label="Checkbox 1"
            onChange={handleChange}
          />
          <Form.Checkbox
            name="checkbox2"
            label="Checkbox 2"
            onChange={handleChange}
          />
        </Form.Group>
      </SampleForm>
    );

    fireEvent.click(getByLabelText("Checkbox 1"));

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object))
    );
  });
});
