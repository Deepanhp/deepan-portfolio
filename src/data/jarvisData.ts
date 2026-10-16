export interface JarvisMetric {
  value: string;
  description: string;
  verified: boolean;
  label?: string;
}

export interface JarvisStage {
  id: string;
  title: string;
  description: string;
}

export interface JarvisMonitor {
  name: string;
  status: string;
  tone: "healthy" | "attention";
}

export interface JarvisCapability {
  title: string;
  description: string;
}

export interface JarvisEvidence {
  title: string;
  description: string;
  images: string[];
}

export interface JarvisData {
  eyebrow: string;
  headline: string;
  summary: string;
  monitors: JarvisMonitor[];
  stages: JarvisStage[];
  capabilities: JarvisCapability[];
  guardrails: string[];
  workflow: string[];
  metrics: JarvisMetric[];
  evidence: JarvisEvidence;
}

export const jarvisData: JarvisData = {
  eyebrow: "Autonomous engineering ecosystem",
  headline: "JARVIS watches engineering while I build.",
  summary:
    "A self-directed engineering system that observes operational signals, assembles context, dispatches specialist agents, and verifies outcomes—with human judgment at the boundaries that matter.",
  monitors: [
    { name: "PR intelligence", status: "Watching", tone: "healthy" },
    { name: "Reliability signals", status: "Healthy", tone: "healthy" },
    { name: "Error queue", status: "Prioritized", tone: "attention" },
    { name: "Learning loop", status: "Ready", tone: "healthy" },
  ],
  stages: [
    { id: "01", title: "Watch", description: "PRs, errors, performance, CI, communication, and engineering activity." },
    { id: "02", title: "Detect", description: "Find anomalies, regressions, feedback, and work that needs attention." },
    { id: "03", title: "Correlate", description: "Assemble history, code context, ownership, dependencies, and prior attempts." },
    { id: "04", title: "Prioritize", description: "Rank work by impact, novelty, urgency, confidence, and available capacity." },
    { id: "05", title: "Dispatch", description: "Route the problem to the right specialist agent and isolated workspace." },
    { id: "06", title: "Verify", description: "Apply tests, review loops, quality gates, and explicit approvals." },
    { id: "07", title: "Learn", description: "Preserve outcomes and context so the next decision starts smarter." },
  ],
  capabilities: [
    { title: "PR intelligence", description: "Dependency-aware reviews, reviewer-feedback loops, prioritization, and learning from accepted patterns." },
    { title: "Production reliability", description: "Error detection, diagnosis, deduplication, prioritized remediation, and retry-aware orchestration." },
    { title: "Performance intelligence", description: "Baselines, anomaly detection, tunable thresholds, and bounded issue queues." },
    { title: "CI recovery", description: "Failure monitoring, contextual diagnosis, and controlled repair workflows." },
    { title: "Engineering coordination", description: "Connected signals across work tracking, communication, workspaces, and notifications." },
    { title: "Operational control", description: "Heartbeats, health checks, tracing, activity history, queue health, and explicit start/stop controls." },
  ],
  guardrails: [
    "Fingerprint-aware deduplication",
    "Priority queues and controlled concurrency",
    "Retry and stuck-work recovery",
    "Health checks and heartbeats",
    "Isolated workspaces",
    "Test and review gates",
    "Human approval at consequential boundaries",
    "Evaluation and regression testing",
    "Observable state for every active workflow",
  ],
  workflow: [
    "A new regression signal appears.",
    "JARVIS confirms novelty and assembles a context package.",
    "The queue assigns impact, priority, and available capacity.",
    "A specialist agent investigates in an isolated workspace.",
    "The proposed change passes tests, review, and safety gates.",
    "JARVIS tracks the outcome and records what was learned.",
  ],
  metrics: [
    { value: "10+", description: "proactive monitors", verified: true },
    { value: "24/7", description: "engineering awareness", verified: true },
    { value: "7-stage", description: "autonomous loop", verified: true },
    { value: "60%", description: "less manual coordination", verified: false, label: "Illustrative metric" },
  ],
  evidence: {
    title: "From AI We Ask, to AI That Watches: Building JARVIS",
    description: "Presented at G2's 2026 Mid-Year Meetup in APAC—the public story behind the system and the shift from prompted assistance to proactive engineering intelligence.",
    images: [
      "/images/mymu2026/mymu-1.jpeg",
      "/images/mymu2026/mymu-2.jpeg",
      "/images/mymu2026/mymu-3.jpeg",
      "/images/mymu2026/mymu-4.jpeg",
      "/images/mymu2026/mymu-5.jpeg",
      "/images/mymu2026/mymu-6.jpeg",
    ],
  },
};
