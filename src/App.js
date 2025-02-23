import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import './App.css';
import outdoorKosovaLogo from './images/outdoor_kosova.png';
import flzsSolutionsLogo from './images/flzs_solutions.png';
import testbenchLogo from './images/testbench.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter, faHtml5, faCss3Alt, faJs, faReact, faNode, faDocker, faAws, faGit, faWordpress, faBootstrap, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from "react-typed";
import { Cross as Hamburger } from 'hamburger-react'
// react-timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';


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
      <div id='timeline'>
        {/* Timeline */}
        <Timeline position="left">
          {/* Item 1 */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
              align="right"
              variant="body2"
              color="white"
            >
              September 2024 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                <WorkIcon style={{ color: 'black' }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                NY Vein Center
              </Typography>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                Lead Front End Developer
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* Item 2 */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
              align="right"
              variant="body2"
              color="white"
            >
              July 2022 - March 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                <WorkIcon style={{ color: 'black' }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                Appstellar
              </Typography>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                Front End Developer
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* Item 3 */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
              align="right"
              variant="body2"
              color="white"
            >
              September 2021 - June 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                <WorkIcon style={{ color: 'black' }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                Imbus A.G.
              </Typography>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                Front End Developer
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* Item 4 */}
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0', fontFamily: 'Rubik, sans-serif' }}
              align="right"
              variant="body2"
              color="white"
            >
              September 2018 - July 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot style={{ backgroundColor: '#BCD97E' }}>
                <WorkIcon style={{ color: 'black' }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} variant="h6" component="span" style={{ color: 'white' }}>
                jCoders
              </Typography>
              <Typography sx={{ fontFamily: 'Rubik, sans-serif' }} style={{ color: 'white' }}>
                Front End Developer
              </Typography>
            </TimelineContent>
          </TimelineItem>
          {/* Timeline Bottom */}
        </Timeline>
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
              <p>User-friendly, SEO-optimized booking website for a Top-Balkan Tour Operator. Started from scratch with HTML, CSS, and JavaScript, and brought it to life on WordPress for a smooth and seamless experience. </p>
              <a href='https://www.outdoorkosova.com' target='_blank' rel="noreferrer">TAKE A LOOK</a>
            </div>
          </div>
        </div>
        <div className='project'>
          <h2>FLZS Solutions</h2>
          <div className='projectBox'>
            <img src={flzsSolutionsLogo} alt='FLZS Solutions' />
            <div>
              <p>Full-stack website for a Swiss marketing agency, combining React, Node.js, and TailwindCSS for a modern and responsive design. Collaborated efficiently using Git for version control and Jira to keep the development process organized and on track.</p>
              <a href='https://www.flzssolutions.ch' target='_blank' rel="noreferrer">TAKE A LOOK</a>
            </div>
          </div>
        </div>
        <div className='project'>
          <h2>TestBench</h2>
          <div className='projectBox'>
            <img src={testbenchLogo} alt='TestBench' />
            <div>
              <p>Load Testing Software designed to empower testers, developers, and product owners in creating and evaluating test sessions. The front-end, built with React, delivers a high-performance, interactive, and user-friendly interface for an enhanced UI/UX experience.</p>
              <a href='https://www.imbus.de' target='_blank' rel="noreferrer">TAKE A LOOK</a>
            </div>
          </div>
        </div>
      </div>
      <div id='contact'>
        <h2>Let's Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input required type="text" placeholder="Name" name="form_name" />
          <input required type="email" placeholder="Email" name="form_email" />
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
