import React from 'react';
import { motion } from 'framer-motion'; // animation library

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#002b5b',
    color: 'white',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    height: '40px',
    width: 'auto',
  },
  navLink: {
    marginLeft: '20px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  hero: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1,
  },
  videoBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  sectionTitle: {
    fontSize: '2.5em',
    textAlign: 'center',
    marginBottom: '40px',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '0 20px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  whyCardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '0 20px',
  },
  whyCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
  },
  cardImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  contact: {
    backgroundColor: '#ffffff',
    padding: '50px 20px',
    textAlign: 'center',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    height: '120px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#004080',
    color: 'white',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  footer: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#002b5b',
    color: 'white',
    textAlign: 'center',
  },
};

function App() {
  return (
    <div>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logoSection}>
          <img src="/Logo.png" alt="INTELLIK Logo" style={styles.logo} />
          <h1>INTELLIK AFRICA</h1>
        </div>
        <nav>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#why" style={styles.navLink}>Why Us</a>
          <a href="#media" style={styles.navLink}>Media</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <video autoPlay loop muted playsInline style={styles.videoBg}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: '3rem' }}
        >
          Welcome to INTELLIK AFRICA
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Empowering Africa Through Technology
        </motion.p>
      </div>

      {/* Services Section */}
      <section id="services">
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.serviceGrid}>
  {[
    {
      title: 'Web & App Development',
      desc: 'We design and build custom websites and mobile apps tailored to your business goals.',
    },
    {
      title: 'AI & Automation Solutions',
      desc: 'Leverage AI to automate repetitive tasks, optimize workflows, and improve decision-making.',
    },
    {
      title: 'IT Support & Infrastructure',
      desc: 'Reliable IT support, networking, and systems setup for seamless business operations.',
    },
    {
      title: 'Cloud & DevOps Services',
      desc: 'Migrate to the cloud, scale efficiently, and streamline your deployments with DevOps practices.',
    },
    {
      title: 'Data Solutions',
      desc: 'We collect, clean, and analyze data to give your business powerful insights.',
    },
    {
      title: 'Digital Marketing & Branding',
      desc: 'Grow your brand online with SEO, social media campaigns, and digital ads.',
    },
    {
      title: 'Business Intelligence',
      desc: 'Transform raw data into actionable strategies using powerful BI tools and dashboards.',
    },
    {
      title: 'Custom Software',
      desc: 'Get tailor-made software applications built for your unique business processes.',
    },
    {
      title: 'Tech Training & Bootcamps',
      desc: 'Upskill your team or community with hands-on tech training and modern tools.',
    },
  ].map((item, index) => (
    <motion.div key={index} style={styles.serviceCard}>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </motion.div>
  ))}
</div>
      </section>

      {/* Why Choose Us */}
      <section id="why">
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <div style={styles.whyCardGrid}>
          {['Innovative Solutions', 'Expert Team', 'Client-Centric Approach', 'Proven Track Record', 'Affordable Packages', 'Training & Support'].map((reason, i) => (
            <motion.div
              key={i}
              style={styles.whyCard}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {reason}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section id="media">
        <h2 style={styles.sectionTitle}>Explore Our Work</h2>
        <div style={styles.whyCardGrid}>
          {[
            { title: 'AI Neural Systems', img: '/data.jpg' },
            { title: 'Cognitive Switchboards', img: '/cloud.jpg' },
            { title: 'Connected Earth', img: '/dev.jpg' },
            { title: 'Pixel Innovation', img: '/ai.jpg' },
          ].map((card, i) => (
            <motion.div
              key={i}
              style={styles.whyCard}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={card.img} alt={card.title} style={styles.cardImg} />
              <h3>{card.title}</h3>
              <p>Short description about {card.title}...</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <h2>Contact Us</h2>
        <form style={styles.contactForm}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </section>

      {/* Chatbot Placeholder */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
        <button
          style={{
            backgroundColor: '#004080',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '30px',
            cursor: 'pointer',
          }}
          onClick={() => alert("Chatbot coming soon...")}
        >
          💬
        </button>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} INTELLIK AFRICA. All rights reserved.</p>
        <p>📍 Shamrock Office Park, George, South Africa | 📞 +27 21 403 6360</p>
      </footer>
    </div>
  );
}

export default App;
