import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import JarvisCaseStudy from "./JarvisCaseStudy";

describe("JarvisCaseStudy", () => {
  it("renders the complete engineering narrative with clearly disclosed representative evidence", () => {
    render(<MemoryRouter><JarvisCaseStudy /></MemoryRouter>);
    expect(screen.getByRole("heading", { level: 1, name: /jarvis watches engineering while i build/i })).toBeVisible();
    expect(screen.getByText("Representative demonstration")).toBeVisible();
    expect(screen.getByText(/representative replay using synthetic identifiers/i)).toBeVisible();
    expect(screen.getAllByTestId("jarvis-replay-step")).toHaveLength(5);
    expect(screen.getAllByTestId("jarvis-evaluation")).toHaveLength(4);
    expect(screen.getAllByTestId("jarvis-architecture-layer")).toHaveLength(5);
    expect(screen.getAllByTestId("jarvis-decision")).toHaveLength(4);
    expect(screen.getAllByTestId("jarvis-failure-mode")).toHaveLength(5);
    expect(screen.getAllByTestId("jarvis-stage")).toHaveLength(7);
    expect(screen.getByText("Human approval at consequential boundaries")).toBeVisible();
    expect(screen.queryByText("60%")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to portfolio/i })).toHaveAttribute("href", "/#jarvis");
    expect(document.body).toHaveStyle({ overflowY: "auto" });
  });

  it("publishes route-specific metadata", () => {
    render(<MemoryRouter><JarvisCaseStudy /></MemoryRouter>);
    expect(document.title).toBe("JARVIS — An AI Engineering Evidence Lab | Deepan Kumar");
    expect(document.querySelector("#jarvis-tech-article")).toHaveAttribute("type", "application/ld+json");
  });
});
