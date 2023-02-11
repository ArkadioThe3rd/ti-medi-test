import { render } from "@testing-library/react";
import Home, { title } from "../../pages/index";

describe("Home", () => {
  test("Home", () => {
    const { getByText } = render(<Home />);
    const miTitulo = getByText(title);
    expect(miTitulo.className).toBe("bg-blue-300");
  });
});
