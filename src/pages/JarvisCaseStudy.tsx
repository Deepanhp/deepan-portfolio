import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack, MdArrowDownward, MdArrowOutward } from "react-icons/md";
import { jarvisData } from "../data/jarvisData";
import { JarvisConsole } from "../components/jarvis/JarvisConsole";
import "./JarvisCaseStudy.css";

const routeMeta = {
  description: "How Deepan Kumar designed JARVIS: a bounded, observable AI engineering system with specialist agents, durable state, evaluations, and human approval gates.",
  url: "https://www.deepankumar.com/jarvis",
  title: "JARVIS — An AI Engineering Evidence Lab | Deepan Kumar",
};

const updateMeta = (selector: string, value: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) return () => undefined;
  const previous = element.content;
  element.content = value;
  return () => { element.content = previous; };
};

const JarvisCaseStudy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousOverflowY = document.body.style.overflowY;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const restoreMeta = [
      updateMeta('meta[name="description"]', routeMeta.description),
      updateMeta('meta[property="og:title"]', routeMeta.title),
      updateMeta('meta[property="og:description"]', routeMeta.description),
      updateMeta('meta[property="og:url"]', routeMeta.url),
      updateMeta('meta[property="twitter:title"]', routeMeta.title),
      updateMeta('meta[property="twitter:description"]', routeMeta.description),
      updateMeta('meta[property="twitter:url"]', routeMeta.url),
    ];
    const structuredData = document.createElement("script");
    structuredData.id = "jarvis-tech-article";
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: routeMeta.title,
      description: routeMeta.description,
      author: { "@type": "Person", name: "Deepan Kumar" },
      url: routeMeta.url,
      about: ["AI agents", "AI engineering", "Evaluation", "Engineering automation"],
    });
    document.head.appendChild(structuredData);
    document.title = routeMeta.title;
    if (canonical) canonical.href = routeMeta.url;
    document.body.style.overflowY = "auto";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
      restoreMeta.forEach((restore) => restore());
      if (canonical && previousCanonical) canonical.href = previousCanonical;
      structuredData.remove();
      document.body.style.overflowY = previousOverflowY;
    };
  }, []);

  return (
    <main className="jarvis-case-study">
      <header className="jarvis-case-nav">
        <Link to="/#" data-cursor="disable"><MdArrowBack /> Portfolio</Link>
        <span><i aria-hidden="true" /> JARVIS online</span>
        <Link to="/#contact" data-cursor="disable">Contact <MdArrowOutward /></Link>
      </header>

      <section className="jarvis-case-hero" aria-labelledby="jarvis-case-title">
        <span className="jarvis-case-hero__ghost" aria-hidden="true">JARVIS</span>
        <div className="jarvis-case-hero__copy">
          <p className="jarvis-kicker">{jarvisData.eyebrow}</p>
          <h1 id="jarvis-case-title"><span>JARVIS</span> watches engineering while I build.</h1>
          <p>{jarvisData.summary}</p>
          <a href="#shift" className="jarvis-case-button">Explore the system <MdArrowDownward /></a>
        </div>
        <JarvisConsole />
      </section>

      <section className="jarvis-case-section jarvis-shift" id="shift" aria-labelledby="shift-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">The shift</p><h2 id="shift-title">From reactive to proactive.</h2></div>
        <div className="jarvis-shift__grid">
          <article><span>Before</span><h3>AI waits to be asked.</h3><p>People notice an issue, gather the context, find the owner, start the investigation, and keep checking whether the work moved.</p></article>
          <article className="is-jarvis"><span>With JARVIS</span><h3>The system keeps watch.</h3><p>Signals are observed continuously, correlated with engineering context, prioritized, routed, verified, and retained for the next decision.</p></article>
        </div>
      </section>

      <section className="jarvis-case-section jarvis-lab" id="evidence-lab" aria-labelledby="evidence-lab-title">
        <div className="jarvis-lab__intro">
          <div className="jarvis-section-heading">
            <p className="jarvis-kicker">Engineering evidence</p>
            <h2 id="evidence-lab-title">See the system reason—and prove its work.</h2>
            <p>One representative incident makes the architecture inspectable: what JARVIS knew, what it was allowed to do, what it produced, and where it had to stop.</p>
          </div>
          <aside className="jarvis-disclosure" aria-label="Evidence disclosure">
            <span>Representative demonstration</span>
            <strong>{jarvisData.replay.id}</strong>
            <p>{jarvisData.replay.disclosure}</p>
          </aside>
        </div>

        <div className="jarvis-replay">
          <div className="jarvis-replay__timeline">
            <header><span>Incident replay</span><strong>{jarvisData.replay.title}</strong></header>
            <ol>
              {jarvisData.replay.steps.map((step) => (
                <li data-testid="jarvis-replay-step" className={`is-${step.status}`} key={step.id}>
                  <div className="jarvis-replay__rail"><span>{step.id}</span><i aria-hidden="true" /></div>
                  <article>
                    <div><time>{step.time}</time><span>{step.status === "gated" ? "Approval gate" : "Complete"}</span></div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <code>{step.evidence}</code>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <aside className="jarvis-scorecard">
            <header><div><span className="jarvis-kicker">Evaluation contract</span><h3>Evidence before action.</h3></div><strong>4/4</strong></header>
            <p className="jarvis-scorecard__note">Scenario requirements satisfied; merge remains intentionally gated.</p>
            <ul>
              {jarvisData.replay.evaluations.map((evaluation) => (
                <li data-testid="jarvis-evaluation" key={evaluation.label}>
                  <div><strong>{evaluation.label}</strong><span className={`is-${evaluation.status}`}>{evaluation.status}</span></div>
                  <p>{evaluation.detail}</p>
                </li>
              ))}
            </ul>
            <div className="jarvis-scorecard__boundary"><span>Final boundary</span><strong>Human approval required</strong></div>
          </aside>
        </div>
      </section>

      <section className="jarvis-case-section jarvis-architecture" id="architecture" aria-labelledby="architecture-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">System anatomy</p><h2 id="architecture-title">Probabilistic reasoning. Deterministic control.</h2><p>JARVIS separates sensing, context, reasoning, execution, and verification so no model silently owns the entire workflow.</p></div>
        <ol className="jarvis-architecture__flow">
          {jarvisData.architecture.map((layer) => (
            <li data-testid="jarvis-architecture-layer" key={layer.id}>
              <span>{layer.id}</span><h3>{layer.title}</h3><p>{layer.description}</p>
              <ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="jarvis-case-section jarvis-decisions" id="decisions" aria-labelledby="decisions-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">My engineering decisions</p><h2 id="decisions-title">The hard part is deciding where AI stops.</h2><p>I designed JARVIS around explicit authority, durable state, narrow responsibilities, and independent verification.</p></div>
        <div className="jarvis-decisions__grid">
          {jarvisData.decisions.map((decision, index) => (
            <article data-testid="jarvis-decision" key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><strong>{decision.choice}</strong><p>{decision.reason}</p></article>
          ))}
        </div>
      </section>

      <section className="jarvis-case-section jarvis-failure-lab" id="failure-lab" aria-labelledby="failure-lab-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">Failure lab</p><h2 id="failure-lab-title">Designed for the unhappy path.</h2><p>Autonomy is credible only when duplicate, uncertain, stalled, and unsafe work has an explicit outcome.</p></div>
        <div className="jarvis-failure-table" role="table" aria-label="JARVIS failure and recovery modes">
          <div className="jarvis-failure-table__head" role="row"><span role="columnheader">Failure signal</span><span role="columnheader">Recovery behavior</span><span role="columnheader">Safety boundary</span></div>
          {jarvisData.failureModes.map((mode) => <div data-testid="jarvis-failure-mode" role="row" key={mode.trigger}><strong role="cell">{mode.trigger}</strong><p role="cell">{mode.response}</p><span role="cell">{mode.boundary}</span></div>)}
        </div>
      </section>

      <section className="jarvis-case-section" id="loop" aria-labelledby="loop-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">The autonomous loop</p><h2 id="loop-title">Observe. Reason. Act. Verify.</h2><p>Every stage has a narrow responsibility, an observable state, and a boundary that prevents autonomy from becoming guesswork.</p></div>
        <ol className="jarvis-stage-grid">
          {jarvisData.stages.map((stage) => <li data-testid="jarvis-stage" key={stage.id}><span>{stage.id}</span><h3>{stage.title}</h3><p>{stage.description}</p></li>)}
        </ol>
      </section>

      <section className="jarvis-case-section jarvis-guardrails" id="guardrails" aria-labelledby="guardrails-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">Autonomy with boundaries</p><h2 id="guardrails-title">Trust is engineered, not prompted.</h2><p>JARVIS earns room to act through explicit operational controls and evidence at every consequential step.</p></div>
        <ul>{jarvisData.guardrails.map((guardrail, index) => <li key={guardrail}><span>{String(index + 1).padStart(2, "0")}</span>{guardrail}</li>)}</ul>
      </section>

      <section className="jarvis-impact" id="impact" aria-label="JARVIS impact">
        {jarvisData.metrics.map((metric) => <article key={metric.description}><strong>{metric.value}</strong><p>{metric.description}</p>{metric.label && <span className="jarvis-impact__label">{metric.label}</span>}</article>)}
      </section>

      <section className="jarvis-case-section jarvis-evidence" id="evidence" aria-labelledby="evidence-title">
        <div className="jarvis-evidence__copy"><p className="jarvis-kicker">Built and shared</p><h2 id="evidence-title">{jarvisData.evidence.title}</h2><p>{jarvisData.evidence.description}</p><span>G2 MYMU 2026 · APAC</span></div>
        <div className="jarvis-evidence__photos">
          {jarvisData.evidence.images.slice(0, 3).map((image, index) => <figure key={image}><img src={image} alt={`Deepan Kumar presenting JARVIS at G2 MYMU 2026, photograph ${index + 1}`} loading="lazy" /></figure>)}
        </div>
      </section>

      <footer className="jarvis-case-footer" id="contact">
        <p className="jarvis-kicker">The principle behind the system</p>
        <h2>I build systems that do more than answer—they observe, coordinate, and improve.</h2>
        <div><Link to="/#jarvis"><MdArrowBack /> Back to portfolio</Link><Link to="/#blog">Read my writing <MdArrowOutward /></Link><a href="mailto:deepan.ppgit@gmail.com">Start a conversation <MdArrowOutward /></a></div>
      </footer>
    </main>
  );
};

export default JarvisCaseStudy;
