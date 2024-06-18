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

    const headingElement = screen.getByRole("heading", { level: 2 });
    const headingText = screen.getByText(
      "Do not let the weather rain on your parade"
    );

    expect(headingElement).toBeInTheDocument();
    expect(headingText).toBeInTheDocument();
  });

  test("render sub-heading", () => {
    render(<Home />);

    const paragraphElement = screen.getByRole("paragraph");
    const paragraphText = screen.getByText("Plan your perfect trip.");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphText).toBeInTheDocument();
  });

  test("render Image", () => {
    render(<Home />);

    const imageElement = screen.getByRole("img", { name: /weather/i });

    expect(imageElement).toBeInTheDocument();
  });
});
