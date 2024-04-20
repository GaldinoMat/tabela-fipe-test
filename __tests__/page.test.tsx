import Home, { getStaticProps } from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPropsContext } from "next";

describe("Page", () => {
  const unmockedFetch = global.fetch;

  beforeEach(() => {
    render(<Home brands={[{ codigo: "1", nome: "Carros" }]} />);
  });

  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ codigo: "1", nome: "Carro" }]),
      })
    ) as jest.Mock;
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
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
  });

  it("should return something from getStaticProps", () => {
    const context = {
      params: { id: "1" } as ParsedUrlQuery,
    };
    const value = getStaticProps(context as GetStaticPropsContext);
    expect(value).toBeTruthy();
  });
});
