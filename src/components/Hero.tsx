import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Talin Daga</span>
        </h1>
        <p className="hero-subtitle">
          Computer Science Student | Full Stack Developer
        </p>
        <p className="hero-description">
          I build accessible, pixel-perfect, and performant web experiences.
          Passionate about MERN stack and Django development.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;