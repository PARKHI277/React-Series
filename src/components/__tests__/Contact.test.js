import Contact from "../Contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Should load contact", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
