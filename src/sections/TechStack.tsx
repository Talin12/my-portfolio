import { motion } from 'framer-motion';

export const TechStack = () => {
  const techCategories = {
    languages: ['Python', 'JavaScript', 'Java', 'TypeScript', 'SQL'],
    frontend: ['React', 'Tailwind CSS', 'HTML/CSS', 'React Native'],
    backend: [
        'Node.js',
        'Express.js',
        'Django',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'REST APIs'
    ],
    tools: [
        'Git',
        'GitHub',
        'Docker',
        'Linux',
        'VS Code',
        'Postman'
    ],
    problemSolving: [
        'Data Structures',
        'Algorithms',
        'Competitive Programming'
    ],
    cs: [
        'OOP',
        'DBMS',
        'Operating Systems (Basics)'
    ],
  };

  return (
    <section className="tech-section" id="tech">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="terminal-prompt">&gt;_ tech_stack</span>
      </motion.div>

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Technologies I <span className="highlight">work with</span>
      </motion.h2>

      <div className="tech-grid">
        <motion.div 
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <span className="comment">// Languages</span>
          </h3>
          <div className="tech-pills">
            {techCategories.languages.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#21262d' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <span className="comment">// Frontend</span>
          </h3>
          <div className="tech-pills">
            {techCategories.frontend.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#21262d' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <span className="comment">// Backend</span>
          </h3>
          <div className="tech-pills">
            {techCategories.backend.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#21262d' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <span className="comment">// Tools & Others</span>
          </h3>
          <div className="tech-pills">
            {techCategories.tools.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#21262d' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <span className="comment">// Problem Solving</span>
          </h3>
          <div className="tech-pills">
            {techCategories.problemSolving.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#21262d' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="tech-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">
            <span className="comment">// CS</span>
          </h3>
          <div className="tech-pills">
            {techCategories.cs.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: '#21262d' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};