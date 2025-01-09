import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div id='socials'>
        <a href="https://www.linkedin.com/in/orgen-kelmendi" target="_blank">
          <FontAwesomeIcon id='linkedin' icon={faLinkedin} />
        </a>
        <a href="https://github.com/Orgenkelmendi" target="_blank">
          <FontAwesomeIcon id='github' icon={faGithub} />
        </a>
        <a href="https://x.com/kelmendiorgen" target="_blank">
          <FontAwesomeIcon id='twitter' icon={faXTwitter} />
        </a>
      </div>
      <header>
        <a>JOURNEY</a>
        <a>TECH STACK</a>
        <a>PROJECTS</a>
        <a>GET IN TOUCH</a>
      </header>
      <div id='landing'>
            <p><span id='frontend'>Front End</span> Developer.</p>
            <p><span id='tech'>Tech</span> Enthusiast.</p>
            <p><span id='lifetime'>Lifetime</span> Learner.</p>
      </div>
    </div>
  );
}

export default App;
