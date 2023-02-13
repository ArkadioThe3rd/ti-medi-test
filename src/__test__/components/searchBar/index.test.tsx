import { SearchBar } from "@/components/";
import { fireEvent, render } from "@testing-library/react";

describe("SearchBar Test", () => {
  test("SearchBar", () => {
    const { container, getByRole } = render(<SearchBar />);
    expect(container).toBeVisible();
    expect(getByRole("search")).toHaveClass(
      "bg-transparent flex-auto outline-none"
    );
    fireEvent.change(getByRole("search"), { target: { value: "tetris" } });
    expect(getByRole("search")).toHaveValue("tetris");
    expect(getByRole("button")).toHaveClass(
      "bg-gray-700 hover:bg-slate-500 border rounded w-16 h-9 ml-0.5 text-white text-sm font-medium"
    );
    fireEvent.click(getByRole("button"));
  });
});
