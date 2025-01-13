import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter, faHtml5, faCss3Alt, faJs, faReact, faNode, faDocker, faAws, faGit, faWordpress, faBootstrap, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faIdBadge, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

function App() {
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
      <header>
        <a href='#journey'>JOURNEY</a>
        <a href='#techStack'>TECH STACK</a>
        <a href='projects'>PROJECTS</a>
        <a href='contact'>GET IN TOUCH</a>
      </header>
      <div id='landing'>
            <p><span id='frontend'>Front End</span> Developer.</p>
            <p><span id='tech'>Tech</span> Enthusiast.</p>
            <p><span id='lifetime'>Lifetime</span> Learner.</p>
      </div>
      <div id="journey">
            <div>
              <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> New York Vein Treatment Center</h3>
              <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Developer</p>
              <p> <FontAwesomeIcon icon={faCalendarDays} /> Sep 2024 - Present</p>
            </div>
            <div>
              <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> Appstellar</h3>
              <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Developer</p>
              <p> <FontAwesomeIcon icon={faCalendarDays} /> Sep 2022 - Mar 2024</p>
            </div>
            <div>
              <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> Imbus A.G.</h3>
              <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Developer</p>
              <p> <FontAwesomeIcon icon={faCalendarDays} /> Sep 2021 - Aug 2022</p>
            </div>
            <div>
              <h3> <FontAwesomeIcon className='briefcaseIcon' icon={faBriefcase} /> jCoders Academy</h3>
              <p> <FontAwesomeIcon className='idIcon' icon={faIdBadge} /> Front-End Developer</p>
              <p> <FontAwesomeIcon icon={faCalendarDays} /> Sep 2018 - Aug 2021</p>
            </div>
      </div>
      <div id='techStack'>
          {/* <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faNode} />
          <FontAwesomeIcon icon={faDocker} />
          <FontAwesomeIcon icon={faAws} />
          <FontAwesomeIcon icon={faGit} />
          <FontAwesomeIcon icon={faWordpress} />
          <FontAwesomeIcon icon={faBootstrap} />
          <FontAwesomeIcon icon={faJira} /> */}
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
    </div>
  );
}

export default App;
