import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import JarvisCaseStudy from "./JarvisCaseStudy";

describe("JarvisCaseStudy", () => {
  it("renders the complete engineering narrative and labels illustrative impact", () => {
    render(<MemoryRouter><JarvisCaseStudy /></MemoryRouter>);
    expect(screen.getByRole("heading", { level: 1, name: /jarvis watches engineering while i build/i })).toBeVisible();
    expect(screen.getAllByTestId("jarvis-stage")).toHaveLength(7);
    expect(screen.getAllByTestId("jarvis-capability")).toHaveLength(6);
    expect(screen.getByText("Human approval at consequential boundaries")).toBeVisible();
    expect(screen.getAllByTestId("jarvis-workflow-step")).toHaveLength(6);
    expect(screen.getByText("60%")).toBeVisible();
    expect(screen.getByText("Illustrative metric")).toBeVisible();
    expect(screen.getByRole("link", { name: /back to portfolio/i })).toHaveAttribute("href", "/#jarvis");
    expect(document.body).toHaveStyle({ overflowY: "auto" });
  });
});
