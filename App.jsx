import React from 'react';

const styles = { navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#002b5b', color: 'white', padding: '10px 20px', position: 'sticky', top: 0, zIndex: 1000, }, navLink: { marginLeft: '20px', color: 'white', textDecoration: 'none', fontWeight: 'bold', }, hero: { position: 'relative', height: '100vh', overflow: 'hidden', color: 'white', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1, }, videoBg: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, }, sectionTitle: { fontSize: '2.5em', textAlign: 'center', marginBottom: '40px', }, serviceGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '0 20px', }, serviceCard: { backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease', }, whyCardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '0 20px', }, whyCard: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'left' }, cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '0 20px', }, imageCard: { backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', }, cardImg: { width: '100%', height: '200px', objectFit: 'cover', }, contact: { backgroundColor: '#ffffff', padding: '50px 20px', textAlign: 'center', }, contactForm: { display: 'flex', flexDirection: 'column', maxWidth: '500px', margin: '0 auto', }, input: { padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', }, textarea: { padding: '10px', margin: '10px 0', height: '120px', border: '1px solid #ccc', borderRadius: '8px', fontSize: '16px', }, button: { backgroundColor: '#004080', color: 'white', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 0.3s', }, footer: { marginTop: '40px', padding: '20px', backgroundColor: '#002b5b', color: 'white', textAlign: 'center', }, };

function App() {
  return (
    <div>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h1>INTELLIK AFRICA</h1>
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
        <h2 style={{ fontSize: '3rem' }}>Welcome to INTELLIK AFRICA</h2>
        <p>Empowering Africa Through Technology</p>
      </div>

      {/* Our Services */}
      <section id="services">
        <div style={styles.services}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <div style={styles.serviceGrid}>
            <div style={styles.serviceCard}>
              <h3>Web & App Development</h3>
              <p>We design and build custom websites and mobile apps tailored to your business goals.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>AI & Automation Solutions</h3>
              <p>Leverage AI to automate repetitive tasks, optimize workflows, and improve decision-making.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>IT Support & Infrastructure</h3>
              <p>Reliable IT support, networking, and systems setup for seamless business operations.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Cloud & DevOps Services</h3>
              <p>Migrate to the cloud, scale efficiently, and streamline your deployments with DevOps practices.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Data Solutions</h3>
              <p>We collect, clean, and analyze data to give your business powerful insights.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Digital Marketing & Branding</h3>
              <p>Grow your brand online with SEO, social media campaigns, and digital ads.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Business Intelligence</h3>
              <p>Transform raw data into actionable strategies using powerful BI tools and dashboards.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Custom Software</h3>
              <p>Get tailor-made software applications built for your unique business processes.</p>
            </div>
            <div style={styles.serviceCard}>
              <h3>Tech Training & Bootcamps</h3>
              <p>Upskill your team or community with hands-on tech training and modern tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why">
        <h2 style={styles.sectionTitle}>Why Choose Us</h2>
        <div style={styles.whyCardGrid}>
          <div style={styles.whyCard}>Innovative Solutions</div>
          <div style={styles.whyCard}>Expert Team</div>
          <div style={styles.whyCard}>Client-Centric Approach</div>
          <div style={styles.whyCard}>Proven Track Record</div>
          <div style={styles.whyCard}>Affordable Packages</div>
          <div style={styles.whyCard}>Training & Support</div>
        </div>
      </section>

      {/* Media Cards */}
      <section id="media">
        <h2 style={styles.sectionTitle}>Explore Our Work</h2>
        <div style={styles.whyCardGrid}>
          <div style={styles.whyCard}>
            <img
              src="/data.jpg"
              alt="Abstract neural network with interconnected nodes representing artificial intelligence and data analysis, set against a modern digital background. The mood is innovative and forward-thinking."
              style={styles.cardImg}
            />
            <h3>AI Neural Systems</h3>
            <p style={styles.cardText}>
              Inspired by the complexity of the human brain, our systems simulate intelligence to drive automation and deep data insights.
            </p>
          </div>

          <div style={styles.whyCard}>
            <img
              src="/cloud.jpg"
              alt="Stylized switchboard with glowing connections symbolizing cognitive networks and real-time information processing, surrounded by a high-tech environment. The atmosphere is dynamic and collaborative."
              style={styles.cardImg}
            />
            <h3>Cognitive Switchboards</h3>
            <p style={styles.cardText}>
              Our smart networks process vast information like switchboards, connecting insights, people, and platforms in real time.
            </p>
          </div>

          <div style={styles.whyCard}>
            <img
              src="/dev.jpg"
              alt="Global digital infrastructure with interconnected continents and cloud icons, illustrating scalable technology and seamless integration. The setting is expansive and optimistic."
              style={styles.cardImg}
            />
            <h3>Connected Earth</h3>
            <p style={styles.cardText}>
              We build digital infrastructure that spans continents, delivering scalable cloud solutions and seamless global integration.
            </p>
          </div>

          <div style={styles.whyCard}>
            <img
              src="/ai.jpg"
              alt="Colorful pixelated interface with creative design elements, representing innovation in technology and user experience. The environment is vibrant and imaginative. Visible text: Pixel Innovation."
              style={styles.cardImg}
            />
            <h3>Pixel Innovation</h3>
            <p style={styles.cardText}>
              From abstract concepts to stunning interfaces, we craft tech experiences pixel by pixel — engineered for humans.
            </p>
          </div>
        </div>
      </section>
    <section id="contact" style={styles.contact}>
      <h2>Contact Us</h2>
      <form style={styles.contactForm}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>

    {/* Footer */}
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} INTELLIK AFRICA. All rights reserved.</p>
    </footer>
  </div>

); }

export default App;







