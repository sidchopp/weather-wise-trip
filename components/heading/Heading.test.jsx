import { screen, render } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading Component", () => {
  test("render Heading", () => {
    render(<Heading />);

    const headingElement = screen.getByRole("heading", { level: 1 });

    expect(headingElement).toBeInTheDocument();
  });
});
