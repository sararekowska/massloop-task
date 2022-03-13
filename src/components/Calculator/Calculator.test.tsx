import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../translations/i18n";
import { Calculator } from "./Calculator";

describe("calculator", () => {
  const renderCalc = () =>
    render(
      <I18nextProvider i18n={i18n}>
        <Calculator />
      </I18nextProvider>
    );

  it("should display a calculator", () => {
    renderCalc();
    const numberInputs = screen.getAllByRole("spinbutton");

    expect(numberInputs).toHaveLength(2);
    numberInputs.forEach((el) => {
      expect(el).toContainHTML("20");
    });
  });

  it("should calculate price correctly", () => {
    renderCalc();
    const result = screen.getByRole("figure");
    const numberInputs = screen.getAllByRole("spinbutton");

    fireEvent.change(numberInputs[0], { target: { value: "2" } });
    fireEvent.change(numberInputs[1], { target: { value: "5" } });
    expect(result).toContainHTML("96");

    fireEvent.change(numberInputs[0], { target: { value: "12" } });
    fireEvent.change(numberInputs[1], { target: { value: "30" } });
    expect(result).toContainHTML("3456");

    fireEvent.change(numberInputs[0], { target: { value: "e" } });
    fireEvent.change(numberInputs[1], { target: { value: "5" } });
    expect(result).toContainHTML("0");
  });
});
