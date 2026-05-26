import "./App.css";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal full-stack portfolio built with React",
      github: "https://github.com/saiswee/Portfolio"
    },
    {
      title: "Python Mini Projects",
      desc: "Calculator, Password Generator, To-Do List (CLI apps built using Python)",
      github: "https://github.com/saiswee/codsoft"
    }
  ];

  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>My Portfolio</h2>
      </nav>

      {/* HERO */}
      <header className="hero">
        <h1>Hi, I'm Saiswee 👋</h1>
        <h3>Full Stack Developer | AI & ML Enthusiast | IoT Builder | Python Developer</h3>
        <p>I build scalable web apps using React, Node.js, and AI tools.</p>

        <div className="buttons">
          <button onClick={scrollToProjects}>
            View Projects
          </button>

          <button className="secondary" onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
      </header>

      <a href="https://github.com/saiswee" target="_blank" rel="noreferrer">
        GitHub Profile
      </a>

      {/* ABOUT */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          🎓 Third-Year Engineering Student<br />
          💻 Python Developer | AI & ML Enthusiast | IoT Builder<br />
          🚀 Passionate about building real-world intelligent systems
        </p>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>C Programming</li>
          <li>Machine Learning</li>
          <li>DSA</li>
          <li>Git & GitHub</li>
          <li>IoT & Sensors</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects">
          {projects.map((p, index) => (
            <div className="card" key={index}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="card-buttons">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact Me</h2>

        <p>Email: saiswee207@gmail.com</p>

        <a
          href="mailto:saiswee207@gmail.com"
          className="contact-btn"
        >
          Send Email
        </a>
      </section>

    </div>
  );
}

export default App;
