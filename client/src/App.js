import "./App.css";

function App() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal full-stack portfolio built with React",
      github: "https://github.com/saiswee/portfolio/client",
      
    },
    {
      title: "Python Mini Projects",
      desc: "Calculator, Password Generator, To-Do List (CLI apps built using Python)",
      github: "https://github.com/saiswee/codsoft",
    },
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
          <button>View Projects</button>
          <button className="secondary">Contact Me</button>
        </div>
      </header>
      <a
  href="https://github.com/saiswee"
  target="_blank"
  rel="noreferrer"
>
  GitHub Profile
</a>

      {/* ABOUT */}
      <section className="section">
  <h2>About Me</h2>
<p>
  🎓 Third-Year Engineering Student<br />
  💻 Python Developer | AI & ML Enthusiast | IoT Builder<br />
  🚀 Passionate about building real-world intelligent systems<br />
  <br />
  - 🔭 Working on AI, ML & IoT projects<br />
  - 🌱 Improving DSA, ML models & system design<br />
  - 🧠 Interested in smart automation & problem solving<br />
  - 🎯 Goal: AI/ML Engineer / Software Developer<br />
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
<li>Data Structures & Algorithms</li>  
<li>Git & GitHub</li>  
<li>IoT & Sensors</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="section">
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
<section className="section">
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
