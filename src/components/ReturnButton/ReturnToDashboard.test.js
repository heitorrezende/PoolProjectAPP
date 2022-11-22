import ReturnToDashboard from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Return to DashBoard", () => {
  it("Shourd render Return to dashboard button", () => {
    render(
      <MemoryRouter>
        <ReturnToDashboard />
      </MemoryRouter>
    );

    expect(screen.getByText("Return to dashboard")).toBeInTheDocument();
  });
  it("Shourd redirect do dashboard after button click", () => {
    render(
      <MemoryRouter>
        <ReturnToDashboard />
      </MemoryRouter>
    );
    const returnButton = screen.getByText("Return to dashboard");
    fireEvent.click(returnButton);
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
