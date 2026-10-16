import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack, MdArrowDownward, MdArrowOutward } from "react-icons/md";
import { jarvisData } from "../data/jarvisData";
import { JarvisConsole } from "../components/jarvis/JarvisConsole";
import "./JarvisCaseStudy.css";

const JarvisCaseStudy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousOverflowY = document.body.style.overflowY;
    document.title = "JARVIS — Autonomous Engineering Ecosystem | Deepan Kumar";
    document.body.style.overflowY = "auto";
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
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

      <section className="jarvis-case-section" id="loop" aria-labelledby="loop-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">The autonomous loop</p><h2 id="loop-title">Observe. Reason. Act. Verify.</h2><p>Every stage has a narrow responsibility, an observable state, and a boundary that prevents autonomy from becoming guesswork.</p></div>
        <ol className="jarvis-stage-grid">
          {jarvisData.stages.map((stage) => <li data-testid="jarvis-stage" key={stage.id}><span>{stage.id}</span><h3>{stage.title}</h3><p>{stage.description}</p></li>)}
        </ol>
      </section>

      <section className="jarvis-case-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">One ecosystem</p><h2 id="capabilities-title">Six connected intelligence layers.</h2></div>
        <div className="jarvis-capability-grid">
          {jarvisData.capabilities.map((capability, index) => <article data-testid="jarvis-capability" key={capability.title}><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}
        </div>
      </section>

      <section className="jarvis-case-section jarvis-guardrails" id="guardrails" aria-labelledby="guardrails-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">Autonomy with boundaries</p><h2 id="guardrails-title">Trust is engineered, not prompted.</h2><p>JARVIS earns room to act through explicit operational controls and evidence at every consequential step.</p></div>
        <ul>{jarvisData.guardrails.map((guardrail, index) => <li key={guardrail}><span>{String(index + 1).padStart(2, "0")}</span>{guardrail}</li>)}</ul>
      </section>

      <section className="jarvis-case-section" id="workflow" aria-labelledby="workflow-title">
        <div className="jarvis-section-heading"><p className="jarvis-kicker">A representative workflow</p><h2 id="workflow-title">From signal to verified outcome.</h2><p>Illustrative identifiers keep private operational data out of the story while showing how the pieces cooperate.</p></div>
        <ol className="jarvis-workflow">
          {jarvisData.workflow.map((step, index) => <li data-testid="jarvis-workflow-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
        </ol>
      </section>

      <section className="jarvis-impact" id="impact" aria-label="JARVIS impact">
        {jarvisData.metrics.map((metric) => <article key={metric.description}><strong>{metric.value}</strong><p>{metric.description}</p>{!metric.verified && <span className="jarvis-impact__label">{metric.label}</span>}</article>)}
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
