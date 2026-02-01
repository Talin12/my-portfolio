import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="terminal-prompt">&gt;_ about_me</span>
      </motion.div>

      <div className="about-container">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>
            Crafting code with <span className="highlight">purpose</span>
          </h2>
          <p>
            I'm a CS student who loves turning complex problems into elegant solutions. 
            My journey began with curiosity about how things work, leading me to explore 
            everything from low-level systems to modern web applications.
          </p>
          <p>
            When I'm not coding, you'll find me reading about emerging technologies, 
            or mentoring fellow students in programming.
          </p>
        </motion.div>

        <motion.div 
          className="about-cards"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <div className="info-icon">🎓</div>
            <h3>Education</h3>
            <p>B.S. Computer Science @ BITS Pilani, Class of 2027</p>
          </div>

          <div className="info-card">
            <div className="info-icon">&lt;/&gt;</div>
            <h3>Focus Areas</h3>
            <p>Backend Development, Data Structures and Algortihms</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🚀</div>
            <h3>Current</h3>
            <p>Building projects, Surviving College and learning every day</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};