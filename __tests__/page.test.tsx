import Home from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("should render a H1 heading", () => {
    const heading1 = screen.getByRole("heading", { level: 1 });

    expect(heading1).toBeInTheDocument();
  });

  it("should render a H2 heading", () => {
    const heading2 = screen.getByRole("heading", { level: 2 });

    expect(heading2).toBeInTheDocument();
  });

  it("should render a form", () => {
    const form = screen.getByTestId("form");

    expect(form).toBeInTheDocument();
  })
});
