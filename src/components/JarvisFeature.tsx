import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { jarvisData } from "../data/jarvisData";
import { JarvisConsole } from "./jarvis/JarvisConsole";
import "./styles/JarvisFeature.css";

const JarvisFeature = () => (
  <section className="jarvis-feature" id="jarvis" aria-labelledby="jarvis-feature-title">
    <span className="jarvis-feature__ghost" aria-hidden="true">JARVIS</span>
    <div className="jarvis-feature__inner section-container">
      <div className="jarvis-feature__copy">
        <p className="jarvis-kicker">{jarvisData.eyebrow}</p>
        <h2 id="jarvis-feature-title"><span>JARVIS</span> watches engineering while I build.</h2>
        <p className="jarvis-feature__summary">{jarvisData.summary}</p>
        <div className="jarvis-feature__actions">
          <Link to="/jarvis" data-cursor="disable">Explore the ecosystem <MdArrowOutward /></Link>
          <span>Built end-to-end by Deepan Kumar</span>
        </div>
      </div>
      <JarvisConsole compact />
    </div>
  </section>
);

export default JarvisFeature;
