import emailjs from "@emailjs/browser";
import { useRef, useEffect, useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import profileImg from "./assets/profile.jpeg";

/* IMAGES */
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";
import photo5 from "./assets/photo5.jpeg";
import photo6 from "./assets/photo6.jpeg";
import photo7 from "./assets/photo7.jpeg";
import photo10 from "./assets/photo10.jpeg";
import photo11 from "./assets/photo11.jpeg";
import photo12 from "./assets/photo12.jpeg";
import photo13 from "./assets/photo13.jpeg";
import photo14 from "./assets/photo14.jpeg";

import drawing1 from "./assets/drawing1.jpeg";
import drawing2 from "./assets/drawing2.jpeg";
import drawing3 from "./assets/drawing3.jpeg";
import drawing4 from "./assets/drawing4.jpeg";
import drawing5 from "./assets/drawing5.jpeg";
import drawing6 from "./assets/drawing6.jpeg";
import drawing7 from "./assets/drawing7.jpeg";
import drawing8 from "./assets/drawing8.jpeg";
import drawing9 from "./assets/drawing9.jpeg";
import drawing10 from "./assets/drawing10.jpeg";

function App() {
  const form = useRef();
  const [showTop, setShowTop] = useState(false);

  /* scroll button */
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* FIXED SCROLL FUNCTION */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -80;
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* scroll to top */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* email */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fmdlm3",
        "template_sy3jkfu",
        form.current,
        "Zmuj6OHv-CipqGci3"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  /* projects */
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal React portfolio with modern UI",
      github: "https://github.com/saiswee/Portfolio",
    },
    {
      title: "Python Mini Projects",
      desc: "CLI apps: Calculator, Password Generator, To-Do List",
      github: "https://github.com/saiswee/codsoft",
    },
  ];

  /* images */
  const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo10, photo11,
    photo12, photo13, photo14,
  ];

  const drawings = [
    drawing1, drawing2, drawing3, drawing4, drawing5,
    drawing6, drawing7, drawing8, drawing9, drawing10,
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Saiswee.dev</h2>

        <div className="nav-links">
          <span onClick={() => scrollToSection("projects")}>Projects</span>
          <span onClick={() => scrollToSection("creative")}>Creative</span>
          <span onClick={() => scrollToSection("contact")}>Contact</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <img className="profile-img" src={profileImg} alt="portfolio profile" />

        <p className="hero-kicker">
          AI ENGINEER • FULL STACK DEVELOPER • SYSTEM BUILDER
        </p>

        <h1 className="hero-title">
          I build intelligent systems that turn ideas into production-ready products.
        </h1>

        <p className="hero-subtitle">
          I specialize in full-stack development, AI/ML systems, and IoT automation.
        </p>

        <div className="hero-buttons">
          <button onClick={() => scrollToSection("projects")}>View Work</button>
          <button className="secondary" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>Engineering student focused on AI, Full Stack & IoT systems.</p>
          <p>Turning ideas into real-world scalable products.</p>
          <p>System thinking: build, break, scale, improve.</p>
          <p>Currently exploring AI + software engineering.</p>

          <p className="about-highlight">
            Goal: Become an AI Engineer who builds real systems.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <h2 className="section-title">Projects</h2>

        <div className="case-grid">
          {projects.map((p, i) => (
            <div className="case-card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.github} target="_blank" rel="noreferrer">
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CREATIVE */}
      <section className="section" id="creative">
        <h2 className="section-title">Creative Works</h2>

        <div className="dual-slider">

          {/* PHOTOS */}
          <div className="slider-box">
            <h3 className="slider-title">Photography</h3>

            <Swiper modules={[Navigation]} navigation slidesPerView={1}>
              {photos.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-card">
                    <img src={img} alt="photography" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DRAWINGS */}
          <div className="slider-box">
            <h3 className="slider-title">Drawings</h3>

            <Swiper modules={[Navigation]} navigation slidesPerView={1}>
              {drawings.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-card">
                    <img src={img} alt="drawing" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-layout">

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>📱 +91 8008207324</p>
            <p>📧 saiswee207@gmail.com</p>

            <a href="https://www.linkedin.com/in/saiswee-chandaraju" target="_blank">
              🔗 LinkedIn
            </a>

            <a href="https://github.com/saiswee" target="_blank">
              💻 GitHub
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input name="user_name" placeholder="Your Name" required />
            <input name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message 🚀</button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Saiswee.dev</p>
      </footer>

      {/* SCROLL TOP */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default App;