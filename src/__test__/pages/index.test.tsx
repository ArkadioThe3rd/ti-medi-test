import { render } from "@testing-library/react";
import Home from "../../pages/index";

describe("Testing Home", () => {
  test("Home", () => {
    const { getByRole, container } = render(<Home />);
    expect(getByRole("main")).toBeVisible();
    expect(getByRole("main")).toHaveClass("flex flex-col items-center");
  });
});
