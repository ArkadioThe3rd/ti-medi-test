import { render } from "@testing-library/react";
import Home from "../../pages/index";

describe("Testing Home", () => {
  test("Home", () => {
    const { container } = render(<Home />);
    expect(container).toBeVisible();
  });
});
