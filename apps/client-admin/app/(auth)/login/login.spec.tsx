import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./page";

describe("Login page", () => {
  it("should render with required fields", () => {
    render(<LoginPage />);

    // getBy => throws error
    // findBy => Async
    // queryBy => null

    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Remember me" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Forgot Password?" })).toBeInTheDocument();
  });
});
