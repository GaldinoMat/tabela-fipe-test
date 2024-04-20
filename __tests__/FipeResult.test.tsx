import FipeResult from "@/components/FormComponent/FipeResult";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("FipeResult Component", () => {
  it("should render select component when props are passed", () => {
    render(
      <FipeResult
        isValid
        fipeInfo={{ AnoModelo: 2010, Modelo: "Carro", Valor: "R$ 1000.00" }}
      />
    );

    const result = screen.getByTestId("fipe-result");
    expect(result).toBeInTheDocument();
  });
});
