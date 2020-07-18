import React from "react";
import { render } from "@testing-library/react";

import { Form } from "../../Form";

describe("Form", () => {
  it("should render the component", () => {
    const { container } = render(<Form />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div>
        Hello, World!
      </div>
    `);
  });
});
