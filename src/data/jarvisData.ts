export interface JarvisMetric {
  value: string;
  description: string;
  verified: boolean;
  label?: string;
}

export interface JarvisReplayStep {
  id: string;
  time: string;
  title: string;
  status: "complete" | "gated";
  description: string;
  evidence: string;
}

export interface JarvisEvaluation {
  label: string;
  status: "pass" | "gated";
  detail: string;
}

export interface JarvisArchitectureLayer {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface JarvisDecision {
  title: string;
  choice: string;
  reason: string;
}

export interface JarvisFailureMode {
  trigger: string;
  response: string;
  boundary: string;
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
  replay: {
    id: string;
    title: string;
    disclosure: string;
    steps: JarvisReplayStep[];
    evaluations: JarvisEvaluation[];
  };
  architecture: JarvisArchitectureLayer[];
  decisions: JarvisDecision[];
  failureModes: JarvisFailureMode[];
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
    { value: "7-stage", description: "autonomous loop", verified: true },
    { value: "6", description: "intelligence layers", verified: true },
    { value: "9", description: "explicit guardrails", verified: true },
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
  replay: {
    id: "SIG-DEMO-042",
    title: "API latency regression after a recent change",
    disclosure: "Representative replay using synthetic identifiers and values. It demonstrates the system design without exposing private operational data.",
    steps: [
      {
        id: "01",
        time: "14:32:08",
        title: "Signal fingerprinted",
        status: "complete",
        description: "A sustained p95 latency shift is separated from a known recurring alert and accepted as novel work.",
        evidence: "fingerprint: api-latency / novelty: 0.94",
      },
      {
        id: "02",
        time: "14:32:11",
        title: "Context grounded",
        status: "complete",
        description: "The context engine connects the signal to a recent change, its owner, affected paths, and prior remediation history.",
        evidence: "4 sources cited / ownership resolved",
      },
      {
        id: "03",
        time: "14:32:16",
        title: "Specialist dispatched",
        status: "complete",
        description: "A reliability specialist receives a bounded task, read-only production evidence, and an isolated code workspace.",
        evidence: "tool scope: repo + tests / workspace isolated",
      },
      {
        id: "04",
        time: "14:34:51",
        title: "Change evaluated",
        status: "complete",
        description: "The proposed patch is checked against focused tests, regression coverage, evidence grounding, and policy constraints.",
        evidence: "tests: green / eval contract: satisfied",
      },
      {
        id: "05",
        time: "14:35:03",
        title: "Human boundary preserved",
        status: "gated",
        description: "JARVIS prepares the decision package but cannot merge or communicate externally without explicit approval.",
        evidence: "action: approval required",
      },
    ],
    evaluations: [
      { label: "Evidence grounded", status: "pass", detail: "Every conclusion points to a captured signal or repository artifact." },
      { label: "Tool scope respected", status: "pass", detail: "The specialist stayed inside its declared read/write permissions." },
      { label: "Regression covered", status: "pass", detail: "Focused verification and the affected test suite complete successfully." },
      { label: "Consequential action", status: "gated", detail: "Merge and external communication remain human-controlled." },
    ],
  },
  architecture: [
    { id: "01", title: "Signals", description: "Continuously watch engineering systems without granting write access.", items: ["PR + CI events", "Errors + traces", "Performance", "Work queues"] },
    { id: "02", title: "Context", description: "Turn a notification into an evidence-backed engineering brief.", items: ["Code graph", "Ownership", "Change history", "Prior outcomes"] },
    { id: "03", title: "Reasoning", description: "Route bounded problems instead of relying on one general-purpose agent.", items: ["Triage model", "Confidence gate", "Specialist agents", "Model routing"] },
    { id: "04", title: "Execution", description: "Give each task the smallest useful tool surface and isolated state.", items: ["Tool policies", "Workspaces", "Priority queue", "Retries"] },
    { id: "05", title: "Verification", description: "Require deterministic evidence around probabilistic decisions.", items: ["Tests", "Evaluators", "Review loop", "Human approval"] },
  ],
  decisions: [
    { title: "Bound autonomy", choice: "Agents propose; policy decides what may execute.", reason: "Probabilistic reasoning is useful for investigation, while consequential actions need deterministic control." },
    { title: "Preserve durable state", choice: "Every workflow has an identity, owner, stage, and heartbeat.", reason: "Long-running work must survive restarts, expose stalls, and resume without duplicating action." },
    { title: "Route to specialists", choice: "Narrow agents receive curated context and limited tools.", reason: "Smaller responsibilities improve evaluation, observability, and failure isolation." },
    { title: "Verify outside the model", choice: "Tests, policies, and approvals are independent gates.", reason: "The agent cannot grade its own work or silently expand its authority." },
  ],
  failureModes: [
    { trigger: "Duplicate signal", response: "Match the stable fingerprint and attach new evidence to existing work.", boundary: "No second agent is dispatched." },
    { trigger: "Low-confidence diagnosis", response: "Return the evidence package with explicit uncertainty and missing context.", boundary: "Escalate instead of guessing." },
    { trigger: "Tool or model timeout", response: "Checkpoint state, apply a bounded retry policy, and retain the attempt history.", boundary: "Retries cannot loop indefinitely." },
    { trigger: "Stalled specialist", response: "Heartbeat expiry returns the task to controlled recovery with its workspace intact.", boundary: "Concurrency capacity is reclaimed safely." },
    { trigger: "Unsafe proposed action", response: "Policy blocks execution and records the attempted capability and rationale.", boundary: "Approval cannot be inferred from model confidence." },
  ],
};
