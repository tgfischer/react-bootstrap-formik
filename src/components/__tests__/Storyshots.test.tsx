import { ReactElement } from "react";
import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import { render, waitFor } from "@testing-library/react";

initStoryshots({
  test: multiSnapshotWithOptions({
    renderer: async (element: ReactElement) => {
      const { container } = render(element);
      await waitFor(() => expect(container.firstChild).not.toBeNull());
      return container.firstChild;
    }
  })
});
