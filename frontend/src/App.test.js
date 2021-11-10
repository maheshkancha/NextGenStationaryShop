import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app component", () => {
  render(<App />);
  const appCompMessage = screen.getByText(/welcome/i);
  expect(appCompMessage).toBeInTheDocument();
});
