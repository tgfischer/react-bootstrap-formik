import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import { render, waitFor } from "@testing-library/react";
import { ReactElement } from "react";

initStoryshots({
  test: multiSnapshotWithOptions({
    renderer: async (element: ReactElement) => {
      const { container } = render(element);
      await waitFor(() => expect(container).not.toBeEmptyDOMElement());
      return container.firstChild;
    }
  })
});
