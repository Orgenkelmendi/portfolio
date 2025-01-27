import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import './App.css';
import outdoorKosovaLogo from './images/outdoor_kosova.png';
import flzsSolutionsLogo from './images/flzs_solutions.png';
import testbenchLogo from './images/testbench.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter, faHtml5, faCss3Alt, faJs, faReact, faNode, faDocker, faAws, faGit, faWordpress, faBootstrap, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faIdBadge, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { ReactTyped } from "react-typed";
import { Cross as Hamburger } from 'hamburger-react'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("")
  const form = useRef();

  const handleToggle = (toggled) => {
    setIsOpen(toggled);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzl9i0m",
        "template_axh8pye",
        form.current,
        "nOlLJyYlfLVsL3q9h"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // alert("Email sent successfully!");
          setResult("Email sent. Thank you.")
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          // alert("Failed to send email. Please try again.");
          setResult('Failed to send. Please try again.')
        }
      );

    e.target.reset();
  };
  
  return (
    <div className="App">
      <div id='socials'>
        <a href="https://www.linkedin.com/in/orgen-kelmendi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon id='linkedin' icon={faLinkedin} />
        </a>
        <a href="https://github.com/Orgenkelmendi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon id='github' icon={faGithub} />
        </a>
        <a href="https://x.com/kelmendiorgen" target="_blank" rel="noreferrer">
          <FontAwesomeIcon id='twitter' icon={faXTwitter} />
        </a>
      </div>
      <header className={`menu ${isOpen ? 'open' : ''}`}>
        <a href='#journey'>JOURNEY</a>
        <a href='#techStack'>TECH STACK</a>
        <a href='#projects'>PROJECTS</a>
        <a href='#contact'>GET IN TOUCH</a>
      </header>
      <div id='hamburger'>
        <Hamburger toggled={isOpen} toggle={handleToggle} direction='right' size={20} color='white' />
      </div>
      <div id='landing'>
        <p>
          <ReactTyped strings={["<span id='frontend'> Front End</span> Developer.", "<span id='tech'>Tech</span> Enthusiast.", "<span id='lifetime'>Lifetime</span> Learner."]} typeSpeed={100} backSpeed={100} cursorChar=">" showCursor="true" loop />
        </p>
      </div>
      <div id="journey">
        <div>
          <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> NY Vein Treatment Center</h3>
          <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Lead Front-End Developer</p>
          <p className='calendar'> <FontAwesomeIcon className='calendarIcon' icon={faCalendarDays} /> Sep 2024 - Present</p>
        </div>
        <div>
          <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> Appstellar</h3>
          <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Developer</p>
          <p className='calendar'> <FontAwesomeIcon className='calendarIcon' icon={faCalendarDays} /> Sep 2022 - Mar 2024</p>
        </div>
        <div>
          <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> Imbus A.G.</h3>
          <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Developer</p>
          <p className='calendar'> <FontAwesomeIcon className='calendarIcon' icon={faCalendarDays} /> Sep 2021 - Aug 2022</p>
        </div>
        <div>
          <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> jCoders Academy</h3>
          <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Dev & Trainer</p>
          <p className='calendar'> <FontAwesomeIcon className='calendarIcon' icon={faCalendarDays} /> Sep 2018 - Aug 2021</p>
        </div>
      </div>
      <div id='techStack'>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faHtml5} />
          <span className='iconText'>HTML5</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faCss3Alt} />
          <span className='iconText'>CSS3</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faJs} />
          <span className='iconText'>JavaScript</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faReact} />
          <span className='iconText'>React</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faNode} />
          <span className='iconText'>Node.js</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faDocker} />
          <span className='iconText'>Docker</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faAws} />
          <span className='iconText'>AWS</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faGit} />
          <span className='iconText'>Git</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faJira} />
          <span className='iconText'>Jira</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faBootstrap} />
          <span className='iconText'>Bootstrap</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faFigma} />
          <span className='iconText'>Figma</span>
        </div>
        <div className='iconBox'>
          <FontAwesomeIcon className='icons' icon={faWordpress} />
          <span className='iconText'>WordPress</span>
        </div>
      </div>
      <div id='projects'>
        <div className='project'>
          <h2>Outdoor Kosova</h2>
          <div className='projectBox'>
            <img src={outdoorKosovaLogo} alt='Outdoor Kosova' />
            <div>
              <p>Tour Operator booking website and SEO-optimized. Developed with pure code in HTML, CSS and JavaScript, and deployed in WordPress.  </p>
              <a href='https://www.outdoorkosova.com' target='_blank' rel="noreferrer">TAKE A LOOK</a>
            </div>
          </div>
        </div>
        <div className='project'>
          <h2>FLZS Solutions</h2>
          <div className='projectBox'>
            <img src={flzsSolutionsLogo} alt='FLZS Solutions' />
            <div>
              <p>Full-Stack developed website for a Swiss marketing agency. Built with React, Node.js and TailwindCSS.
                Git and Jira were used during the development to manage the process.</p>
              <a href='https://www.flzssolutions.ch' target='_blank' rel="noreferrer">TAKE A LOOK</a>
            </div>
          </div>
        </div>
        <div className='project'>
          <h2>TestBench</h2>
          <div className='projectBox'>
            <img src={testbenchLogo} alt='TestBench' />
            <div>
              <p>Load Testing Software to help testers, developers, and product owners create and evaluate test sessions. The front-end is built with React to maintain a better UI/UX and ensure high performance with interactive interfaces.</p>
              <a href='https://www.imbus.de' target='_blank' rel="noreferrer">TAKE A LOOK</a>
            </div>
          </div>
        </div>
      </div>
      <div id='contact'>
          <h2>Let's Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input required type="text" placeholder="Name" name="form_name"/>
            <input required type="email" placeholder="Email" name="form_email"/>
            <textarea required rows="6" placeholder="Message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
          <p id='result'>{result}</p>
      </div>
      <footer>
        <p>© 2025 Orgen Kelmendi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
