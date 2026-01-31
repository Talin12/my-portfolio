import { motion } from 'framer-motion';

const Section = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.section 
      className="section"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="section-content">
        {children}
      </div>
    </motion.section>
  );
};

export const Overlay = () => {
  return (
    <div style={{ width: '100%' }}>
      
      {/* SECTION 1: HERO */}
      <Section>
        <span className="comment">// Welcome to my portfolio v2.0</span>
        <br />
        <span className="keyword">const</span> <span className="function">Developer</span> = <span className="keyword">new</span> <span className="function">User</span>({'{'}
        <br />
        &nbsp;&nbsp;name: <span className="string">"Talin Daga"</span>,
        <br />
        &nbsp;&nbsp;roles: [<span className="string">"CS_Student"</span>, <span className="string">"Ayurveda_Student"</span>],
        <br />
        &nbsp;&nbsp;focus: <span className="string">"Scalable Backends & Automation"</span>
        <br />
        {'}'});
      </Section>

      {/* SECTION 2: STACK */}
      <Section>
        <span className="comment">// Core technologies loaded in memory...</span>
        <h2>System.Stack</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {['Django', 'MERN_Stack', 'Java', 'Python', 'Networking'].map((tech) => (
            <div key={tech} style={{ 
              background: '#21262d', 
              padding: '0.5rem 1rem', 
              border: '1px solid #30363d',
              color: '#7ee787',
              fontFamily: 'monospace'
            }}>
              {`> ${tech}`}
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 3: PROJECTS */}
      <Section>
        <span className="comment">// Retrieving latest commits...</span>
        <h2>git log --oneline</h2>
        
        <div className="card-grid">
          <div className="card">
            <h3>Django_Automations</h3>
            <p>Bulk emailing suite, data tracking, & async web scraping.</p>
            <span className="tech-tag">Celery</span>
            <span className="tech-tag">Python</span>
          </div>

          <div className="card">
            <h3>Stock_Predictor</h3>
            <p>ML model analyzing buy/sell signals on historical market data.</p>
            <span className="tech-tag">Django</span>
            <span className="tech-tag">Pandas</span>
          </div>

          <div className="card">
            <h3>MERN_Commerce</h3>
            <p>Full-stack e-commerce with secure auth & payment gateways.</p>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">React</span>
          </div>

          <div className="card">
            <h3>CineReserve</h3>
            <p>Movie reservation system exploring techno-masculinity themes.</p>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Django</span>
          </div>
        </div>
      </Section>
    </div>
  );
};