import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import JarvisFeature from "./JarvisFeature";

describe("JarvisFeature", () => {
  it("introduces JARVIS as featured work and links to the case study", () => {
    render(<MemoryRouter><JarvisFeature /></MemoryRouter>);
    expect(screen.getByRole("region", { name: /jarvis watches engineering while i build/i })).toHaveAttribute("id", "jarvis");
    expect(screen.getByRole("heading", { name: /jarvis watches engineering while i build/i })).toBeVisible();
    expect(screen.getByRole("link", { name: /explore the ecosystem/i })).toHaveAttribute("href", "/jarvis");
    expect(screen.getAllByTestId("jarvis-monitor")).toHaveLength(4);
  });
});
