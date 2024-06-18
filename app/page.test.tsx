import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import Jest DOM for matchers
import Home from "./page";
import { CitySelectionDropdown } from "../components";

jest.mock("../components/city/CitySelectionDropdown", () => ({
  ...jest.requireActual("../components/city/CitySelectionDropdown"),
  CitySelectionDropdown: () => <div>City Selection Dropdown Mock</div>,
}));

describe("render Home page", () => {
  test("render Heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 2 });
    const headingText = screen.getByText(
      "Do not let the weather rain on your parade"
    );
    screen.debug();
    screen.logTestingPlaygroundURL();

    expect(heading).toBeInTheDocument();
    expect(headingText).toBeInTheDocument();
  });

  test("render Image", () => {
    render(<Home />);

    const image = screen.getByRole("img", { name: /weather/i });

    expect(image).toBeInTheDocument();
  });
});
