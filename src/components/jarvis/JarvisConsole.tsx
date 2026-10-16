import { jarvisData } from "../../data/jarvisData";
import "./JarvisConsole.css";

const pipeline = ["Detect", "Correlate", "Dispatch", "Verify"];

export const JarvisConsole = ({ compact = false }: { compact?: boolean }) => (
  <div className={`jarvis-console${compact ? " jarvis-console--compact" : ""}`} aria-label="JARVIS operations console">
    <div className="jarvis-console__bar">
      <span className="jarvis-console__lights" aria-hidden="true"><i /><i /><i /></span>
      <span>JARVIS / OPERATIONS</span>
      <span className="jarvis-console__live"><i aria-hidden="true" /> Live</span>
    </div>
    <div className="jarvis-console__body">
      <article className="jarvis-console__event">
        <div className="jarvis-console__event-heading">
          <span><i aria-hidden="true" /> Regression pattern detected</span>
          <time>14:32:08</time>
        </div>
        <p>Anomaly correlated across reliability, performance, and recent-change signals. Context package ready.</p>
        <ol className="jarvis-console__pipeline" aria-label="Current workflow progress">
          {pipeline.map((step, index) => (
            <li className={index < 3 ? "is-complete" : "is-pending"} key={step}>
              <span aria-hidden="true">{index < 3 ? "✓" : index + 1}</span>{step}
            </li>
          ))}
        </ol>
      </article>
      <div className="jarvis-console__monitors">
        {jarvisData.monitors.map((monitor, monitorIndex) => (
          <article className={`jarvis-console__monitor is-${monitor.tone}`} data-testid="jarvis-monitor" key={monitor.name}>
            <div><span>{monitor.name}</span><strong>{monitor.status}</strong></div>
            <div className="jarvis-console__signal" aria-hidden="true">
              {[28, 46, 35, 68, 42, 78, 54, 70].map((height, index) => (
                <i key={index} style={{ height: `${Math.max(14, height - monitorIndex * 4 + index)}%` }} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);
