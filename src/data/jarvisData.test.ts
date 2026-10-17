import { describe, expect, it } from "vitest";
import { jarvisData } from "./jarvisData";

describe("jarvisData", () => {
  it("contains the public system story without private operational material", () => {
    expect(jarvisData.headline).toBe("JARVIS watches engineering while I build.");
    expect(jarvisData.stages.map((stage) => stage.title)).toEqual([
      "Watch", "Detect", "Correlate", "Prioritize", "Dispatch", "Verify", "Learn",
    ]);
    expect(jarvisData.monitors).toHaveLength(4);
    expect(jarvisData.capabilities).toHaveLength(6);
    expect(jarvisData.replay.steps).toHaveLength(5);
    expect(jarvisData.replay.evaluations).toHaveLength(4);
    expect(jarvisData.architecture).toHaveLength(5);
    expect(jarvisData.decisions).toHaveLength(4);
    expect(jarvisData.failureModes).toHaveLength(5);
    expect(JSON.stringify(jarvisData)).not.toMatch(/api[_-]?key|cookie|internal\.url|@g2\.com/i);
  });

  it("does not publish unverified impact metrics", () => {
    const unverified = jarvisData.metrics.filter((metric) => !metric.verified);
    expect(unverified).toEqual([]);
    expect(jarvisData.metrics.map((metric) => metric.value)).not.toContain("60%");
    expect(jarvisData.replay.disclosure).toMatch(/synthetic identifiers/i);
  });
});
