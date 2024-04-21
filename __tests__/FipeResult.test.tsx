import FipeResult from "@/components/FormComponent/FipeResult";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("FipeResult Component", () => {
  it("should render select component when props are passed", () => {
    render(
      <FipeResult
        errorMessage=""
        isValid
        fipeInfo={{
          Marca: "Volks",
          AnoModelo: 2010,
          Modelo: "Carro",
          Valor: "R$ 1000.00",
        }}
      />
    );

    const result = screen.getByTestId("fipe-result");
    expect(result).toBeInTheDocument();
  });
  it("should render an error message when an error was sent", () => {
    render(
      <FipeResult
        errorMessage="Error"
        isValid={false}
        fipeInfo={{
          Marca: "",
          AnoModelo: 0,
          Modelo: "",
          Valor: "",
        }}
      />
    );

    const errorElem = screen.getByTestId("fipe-error");

    expect(errorElem).toBeInTheDocument();
  });
});
