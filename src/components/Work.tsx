import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

gsap.registerPlugin(useGSAP);

const achievements = [
  {
    id: "01",
    title: "Peak Professional of the Year",
    company: "G2 - 2026",
    description: "Recognized as Peak Professional of the Year for exceptional professional excellence and outstanding contributions to the engineering organization",
    image: "/images/peak-professional.jpeg",
    alt: "Deepan Kumar receiving Peak Professional of the Year Award at G2 2026"
  },
  {
    id: "02",
    title: "Principal Engineer Promotion",
    company: "G2 - 2026",
    description: "Promoted to Principal Engineer for technical leadership, architectural excellence, and driving cross-team initiatives",
    image: "/images/principal-engineer.svg",
    alt: "Deepan Kumar promoted to Principal Engineer at G2"
  },
  {
    id: "03",
    title: "AI at Runtime - Self-Healing Apps",
    company: "RubyConfIndia2025 Speaker",
    description: "Delivered keynote on how applications can actively adapt, recover and heal themselves during runtime using AI",
    image: "/images/conf.jpeg",
    alt: "Deepan Kumar speaking at RubyConf India 2025 on AI at Runtime"
  },
  {
    id: "04",
    title: "Most Valuable Professional Award",
    company: "G2 - 2024",
    description: "Recognized for outstanding professional contributions, team collaboration, and technical leadership excellence at G2",
    image: "/images/mvp.jpeg",
    alt: "Deepan Kumar receiving Most Valuable Professional Award at G2 2024"
  },
  {
    id: "05",
    title: "Technical Mentorship Excellence",
    company: "G2 - 2024",
    description: "Awarded for outstanding mentorship, knowledge sharing, and fostering engineering talent across teams",
    image: "/images/mentorship-excellence.svg",
    alt: "Deepan Kumar technical mentorship excellence award"
  },
  {
    id: "06",
    title: "3rd Place Winner",
    company: "G2 Hackathon FY25",
    description: "Achieved 3rd place in company-wide hackathon, collaborating with brilliant minds to tackle challenging technical problems",
    image: "/images/jarvis.jpeg",
    alt: "Deepan Kumar team winning 3rd place at G2 Hackathon FY25"
  },
  {
    id: "07",
    title: "AI and Engineering Panel Expert",
    company: "RubyConfIndia2025 Panelist",
    description: "Participated in expert panel discussion sharing insights about AI's role and impact on software engineering",
    image: "/images/panel.jpeg",
    alt: "Deepan Kumar participating in AI and Engineering panel at RubyConf India 2025"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalCards = achievements.length;
  const theta = 360 / totalCards;
  const radius = 750;

  useEffect(() => {
    rotateCarousel(0);
  }, []);

  useEffect(() => {
    console.log("Fullscreen image state changed:", fullscreenImage);
  }, [fullscreenImage]);

  const rotateCarousel = (index: number) => {
    const angle = theta * index * -1;
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        rotationY: angle,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalCards;
    setCurrentIndex(newIndex);
    rotateCarousel(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + totalCards) % totalCards;
    setCurrentIndex(newIndex);
    rotateCarousel(newIndex);
  };

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h1>
            Deepan Kumar's Awards & <span>Achievements</span>
          </h1>

          <div className="carousel-scene">
            <div className="carousel-3d" ref={carouselRef}>
              {achievements.map((achievement, index) => {
                const angleZ = theta * index;
                return (
                  <div
                    key={index}
                    className="carousel-cell"
                    style={{
                      transform: `rotateY(${angleZ}deg) translateZ(${radius}px)`
                    }}
                  >
                    <div className="work-box-3d">
                      <div className="work-info">
                        <div className="work-title">
                          <h3>{achievement.id}</h3>
                          <div>
                            <h4>{achievement.title}</h4>
                            <p>{achievement.company}</p>
                          </div>
                        </div>
                        <h4>Achievement highlights</h4>
                        <p>{achievement.description}</p>
                      </div>
                      <div className="work-image-clickable">
                        <WorkImage
                          image={achievement.image}
                          alt={achievement.alt}
                          onClick={() => {
                            console.log("Opening fullscreen for:", achievement.image);
                            setFullscreenImage(achievement.image);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {achievements.map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  rotateCarousel(idx);
                }}
                aria-label={`Go to achievement ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-arrow carousel-prev"
          onClick={handlePrev}
          aria-label="Previous achievement"
        >
          <MdArrowBackIos />
        </button>

        <button
          className="carousel-arrow carousel-next"
          onClick={handleNext}
          aria-label="Next achievement"
        >
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Fullscreen Image Viewer - Rendered at body level using Portal */}
      {fullscreenImage && createPortal(
        <div
          className="fullscreen-overlay"
          onClick={() => {
            console.log("Closing fullscreen");
            setFullscreenImage(null);
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <button
            className="fullscreen-close"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Close button clicked");
              setFullscreenImage(null);
            }}
            aria-label="Close fullscreen"
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              zIndex: 1000000
            }}
          >
            ✕
          </button>
          <img
            src={fullscreenImage}
            alt="Achievement in fullscreen"
            onClick={(e) => {
              console.log("Image in fullscreen clicked");
              e.stopPropagation();
            }}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 20px 80px rgba(0, 0, 0, 0.8)'
            }}
          />
        </div>,
        document.body
      )}
    </>
  );
};

export default Work;
