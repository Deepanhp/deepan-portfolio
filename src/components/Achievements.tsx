import "./styles/Achievements.css";

const Achievements = () => {
  const achievements = [
    {
      title: "Peak Professional of the Year",
      organization: "G2",
      year: "2026",
      image: "/images/peak-professional.jpeg",
      description: "Recognized for exceptional professional excellence and outstanding contributions to the engineering organization"
    },
    {
      title: "Principal Engineer Promotion",
      organization: "G2",
      year: "2026",
      image: "/images/principal-engineer.svg",
      description: "Promoted to Principal Engineer for technical leadership, architectural excellence, and driving cross-team initiatives"
    },
    {
      title: "Staff Engineer Promotion",
      organization: "G2",
      year: "2024",
      image: "/images/staff-engineer.svg",
      description: "Elevated to Staff Engineer role for exceptional technical contributions and system architecture leadership"
    },
    {
      title: "Technical Mentorship Excellence",
      organization: "G2",
      year: "2024",
      image: "/images/mentorship-excellence.svg",
      description: "Awarded for outstanding mentorship, knowledge sharing, and fostering engineering talent across teams"
    },
    {
      title: "Most Valuable Professional",
      organization: "G2",
      year: "2024",
      image: "/images/mvp-award.svg",
      description: "Recognized as Most Valuable Professional for exceptional impact on product delivery and technical excellence"
    },
    {
      title: "G2 Hackathon FY25 - 3rd Place",
      organization: "G2",
      year: "2025",
      image: "/images/hackathon.svg",
      description: "Secured 3rd place in company-wide hackathon for innovative AI-driven solution"
    }
  ];

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h1>
          Awards <span>&</span>
          <br /> Achievements
        </h1>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-image-container">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                />
              </div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="achievement-org">{achievement.organization}</span>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
