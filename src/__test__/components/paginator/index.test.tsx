import { fireEvent, render } from "@testing-library/react";
import { Paginator } from "@/components";

const fn = () => {};
const pageSelector =
  "flex items-center px-3 py-1 bg-gray-400 hover:bg-gray-300 cursor-pointer";

describe("Test Paginator", () => {
  test("Paginador", () => {
    const { container, getAllByRole, getByRole } = render(
      <Paginator handler={fn} jumpList={10} lengthList={5} resultsList={10} />
    );
    expect(container).toBeVisible();
    const buttons = getAllByRole("button");
    expect(buttons[0]).toHaveClass(`${pageSelector} rounded-l`);
    expect(buttons[1]).toHaveClass(`${pageSelector} rounded-r`);
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
  });
});
