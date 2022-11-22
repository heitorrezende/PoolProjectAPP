import WelcomeContainer from ".";
import { render, screen } from "@testing-library/react";

describe("Return to DashBoard", () => {
  it("Shourd render Return to dashboard button", () => {
    let view = render(<WelcomeContainer />);

    expect(view).toMatchSnapshot();
  });
});
