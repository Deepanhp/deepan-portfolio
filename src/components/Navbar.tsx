import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const handleNavigation = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const element = e.currentTarget as HTMLAnchorElement;
        const section = element.getAttribute("data-href");
        if (section) smoother.scrollTo(section, true, "top top");
      }
    };
    links.forEach((elem) => {
      elem.addEventListener("click", handleNavigation);
    });
    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      links.forEach((elem) => elem.removeEventListener("click", handleNavigation));
      window.removeEventListener("resize", handleResize);
      smoother?.kill();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Home
        </a>
        <a
          href="mailto:deepan.ppgit@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          deepan.ppgit@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#jarvis" href="#jarvis">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#blog" href="#blog">
              <HoverLinks text="BLOG" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
